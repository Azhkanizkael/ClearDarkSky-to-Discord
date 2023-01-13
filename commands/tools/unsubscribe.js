const { SlashCommandBuilder } = require('discord.js');
const choices = require('../data/choices.json');
// const subscriptions = require('../data/subscriptions.json');

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
		// Check to see if the subscription already exists

		// if exists reply it already exists

		// if not exists reply that it's been created
		await interaction.reply({ content: `Subscription Removed for ${option}` });
	},
};