const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const choices = require('../data/choices.json');

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
		const subscription = {
			guildId: interaction.guild.id,
			channelId: interaction.channel.id,
			URI: option,
		};
		// './commands/data/subscriptions.json'
		fs.readFile('./commands/data/subscriptions.json', 'utf8', (err, data) => {
			if (err) throw err;
			const dataObject = JSON.parse(data);
			if (!dataObject.some(item => item.guildId === subscription.guildId && item.channelId === subscription.channelId && item.URI === subscription.URI)) {
				dataObject.push(subscription);
				fs.writeFile('./commands/data/subscriptions.json', JSON.stringify(dataObject), (err) => {
					if (err) throw err;
					console.log('Data written to file');
				});
			}
			else {
				console.log('Data already exists in file');
			}
		});
		await interaction.reply({ content: `Subscription Created for ${option} for ${interaction.guild.name} in the ${interaction.channel.name} channel` });
	},
};