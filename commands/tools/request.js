const { SlashCommandBuilder } = require('discord.js');
const choices = require('../data/choices.json');

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
		const filtered = choices.filter(choice => choice.name.toLowerCase().includes(focusedValue.toLowerCase()));
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
		await interaction.reply({ files: [option] });
	},
};