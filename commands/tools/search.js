// this script will pull the nearest region based on the lat/long provided.

const { SlashCommandBuilder } = require('discord.js');
const choices = require('../data/latlong.json');
const auth = require('../../config.json');
const https = require('https');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('search')
		.setDescription('Return region nearest to indicated search')
		.addStringOption(option => option
			.setName('criteria')
			.setDescription('input City, State')
			.setRequired(true),
		),
	async execute(interaction) {
		const url = `https://dev.virtualearth.net/REST/v1/Locations?query=${interaction.options.getString('criteria')}&key=${auth.mapsKey}`;
		https.get(url, (res) => {
			if (res.statusCode !== 200) {
				interaction.reply('An error occurred: ' + res.statusCode);
			}
			let data = '';
			res.on('data', (chunk) => {
				data += chunk;
			});
			res.on('end', () => {
				const responseData = JSON.parse(data);
				if (responseData.resourceSets[0].estimatedTotal !== 0) {
					const lat = responseData.resourceSets[0].resources[0].point.coordinates[0];
					const long = responseData.resourceSets[0].resources[0].point.coordinates[1];
					if (lat !== undefined && long !== undefined) {
						const distances = choices.map(entry => {
							const latDiff = Math.abs(entry[1] - lat);
							const longDiff = Math.abs(entry[2] - long);
							return Math.sqrt(Math.pow(latDiff, 2) + Math.pow(longDiff, 2));
						});
						const closestEntries = distances
							.map((distance, index) => ({ distance, index }))
							.sort((a, b) => a.distance - b.distance)
							.slice(0, 5)
							.map(entry => choices[entry.index]);
						interaction.reply(closestEntries.map(entry => entry[3]).join('\n'));
					}
				}
				else {
					interaction.reply(`Invalid Search Query: ${interaction.options.getString('criteria')}`);
				}
			});
		}).on('error', (err) => {
			interaction.reply('An error occurred: ' + err.message);
		});
	},
};