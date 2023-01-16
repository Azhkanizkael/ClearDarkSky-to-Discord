const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('legend')
		.setDescription('This will tell you what everything means.'),
	async execute(interaction) {
		await interaction.reply({ files: ['./commands/data/legend.png'] });
	},
};