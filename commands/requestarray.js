const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('requestarray')
		.setDescription('Which telescope array do you want?')
		.addStringOption(option =>
			option.setName('location')
				.setDescription('Which do you want?')
				.setRequired(true)
				.addChoices(
					{ name: 'Telescope Array Black Rock Mesa FD', value: 'https://www.cleardarksky.com/c/TcpAr4UTcsk.gif' },
					{ name: 'Telescope Array Central Laser Facility', value: 'https://www.cleardarksky.com/c/TcpAryObUTcsk.gif' },
					{ name: 'Telescope Array Long Ridge FD', value: 'https://www.cleardarksky.com/c/TcpAr3UTcsk.gif' },
					{ name: 'Telescope Array Middle Drum FD', value: 'https://www.cleardarksky.com/c/TcpAr2UTcsk.gif' },
				),
		),
	async execute(interaction) {
		const locationURI = interaction.options.getString('location');
		const file = new AttachmentBuilder(locationURI);
		interaction.reply({ files: [file] });
	},
};
