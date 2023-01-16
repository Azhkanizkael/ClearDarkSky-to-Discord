const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const choices = require('../data/latlong.json');

const pairs = choices.map(site => ({ name: site[3], value: `https://www.cleardarksky.com/c/${site[0]}csk.gif` }));
pairs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unsubscribe')
		.setDescription('unsubscribe to daily feed, autocompleted')
		.addStringOption(option => option
			.setName('region')
			.setDescription('region of interest')
			.setAutocomplete(true)
			.setRequired(true)),
	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused();
		const filtered = pairs.filter(choice => choice.name.toLowerCase().includes(focusedValue.toLowerCase()));
		let options;
		if (filtered.length > 25) {
			options = filtered.slice(0, 25);
		}
		else {
			options = filtered;
		}
		await interaction.respond(
			options.map(choice => ({ name: choice.name, value: choice.value })),
		);
	},
	async execute(interaction) {
		const option = interaction.options.getString('region');
		console.log(`Unsubscribe requested for ${option} in Guild: ${interaction.guild.id}, Channel: ${interaction.channel.id}`);
		const subscription = {
			guildId: interaction.guild.id,
			channelId: interaction.channel.id,
			URI: option,
		};
		// './commands/data/subscriptions.json'
		fs.readFile('./commands/data/subscriptions.json', 'utf8', (err, data) => {
			if (err) throw err;
			const dataObject = JSON.parse(data);
			const index = dataObject.findIndex(item => item.guildId === subscription.guildId && item.channelId === subscription.channelId && item.URI === subscription.URI);
			if (index !== -1) {
				dataObject.splice(index, 1);
				fs.writeFile('./commands/data/subscriptions.json', JSON.stringify(dataObject, null, 2), (err) => {
					if (err) throw err;
					console.log('Data removed from file');
				});
			}
		});
		await interaction.reply({ content: `Subscription Removed for ${option} for ${interaction.guild.name} in the ${interaction.channel.name} channel` });
	},
};