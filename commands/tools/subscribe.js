const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const choices = require('../data/choices.json');
const subscriptions = require('../data/subscriptions.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('subscribe')
		.setDescription('subscribe to daily feed, autocompleted')
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
		console.log(`Subscription requested for ${option} in Guild: ${interaction.guild.id}, Channel: ${interaction.channel.id}`);
		const jsonData = JSON.parse(fs.readFileSync('../data/subscriptions.json', 'utf8'));
		// const exists = jsonData.forEach(function(element) {
		// 	if (element.guildId === interaction.guild.id && element.channelId === interaction.channel.id && element.URI === option) {
		// 		console.log(element);
		// 	}
		// });
		// if (exists.guildId == interaction.guild.id) {
		// 	await interaction.reply({ content: `Subscription already exists for ${option}` });
		// }
		// else {
		// 	const subscription = {
		// 		guildId: interaction.guild.id,
		// 		channelId: interaction.channel.id,
		// 		URI: option,
		// 	};
		// 	subscriptions.push(subscription);
		// 	console.log(subscription);
		// 	fs.writeFile('../data/subscriptions.json', JSON.stringify(subscriptions), err => {
		// 		if (err) throw err;
		// 	});
		// 	await interaction.reply({ content: `Subscription Created for ${option}` });
		// }
	},
};