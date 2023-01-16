// this script will pull the nearest region based on the lat/long provided.

const { SlashCommandBuilder } = require('discord.js');
const choices = require('../data/latlong.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('near')
		.setDescription('Return region nearest to indicated latitude and longitude')
		.addStringOption(option => option
			.setName('latitude')
			.setDescription('input your latitude here')
			.setRequired(true),
		)
		.addStringOption(option => option
			.setName('longitude')
			.setDescription('input your longitude here')
			.setRequired(true),
		),
	async execute(interaction) {
		const lat = interaction.options.getString('latitude');
		const long = interaction.options.getString('longitude');
		const newMessage = `Location requested for ${lat}, ${long}`;
		await interaction.reply({ content: newMessage });
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
		await interaction.editReply(closestEntries.map(entry => entry[3]).join('\n'));
	},
};