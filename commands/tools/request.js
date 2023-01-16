const { SlashCommandBuilder } = require('discord.js');
const choices = require('../data/latlong.json');

const pairs = choices.map(site => ({ name: site[3], value: `https://www.cleardarksky.com/c/${site[0]}csk.gif` }));
pairs.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

module.exports = {
	data: new SlashCommandBuilder()
		.setName('request')
		.setDescription('request region, autocompleted')
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
			options.map(site => ({ name: site.name, value: site.value })),
		);
	},
	async execute(interaction) {
		const option = interaction.options.getString('region');
		await interaction.reply({ files: [option] });
	},
};