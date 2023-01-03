const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('requestpark')
		.setDescription('Which park do you want?')
		.addStringOption(option =>
			option.setName('location')
				.setDescription('Which do you want?')
				.setRequired(true)
				.addChoices(
					{ name: 'Bryce Canyon National Park', value: 'https://www.cleardarksky.com/c/BrycCNPUTcsk.gif' },
					{ name: 'Camp Floyd State Park', value: 'https://www.cleardarksky.com/c/CpFldPUTcsk.gif' },
					{ name: 'Canyonlands National Park', value: 'https://www.cleardarksky.com/c/CnyNPUTcsk.gif' },
					{ name: 'Capitol Reef National Park', value: 'https://www.cleardarksky.com/c/CptRfNPUTcsk.gif' },
					{ name: 'Cedar Breaks National Monument', value: 'https://www.cleardarksky.com/c/CBNMPSUTcsk.gif' },
					{ name: 'Dead Horse Point State Park', value: 'https://www.cleardarksky.com/c/DdHrsSPUTcsk.gif' },
					{ name: 'Goblin Valley State Park', value: 'https://www.cleardarksky.com/c/GblnVllySPUTcsk.gif' },
					{ name: 'Golden Spike National Historical Park', value: 'https://www.cleardarksky.com/c/GSNHPUTcsk.gif' },
					{ name: 'Natural Bridges National Monument', value: 'https://www.cleardarksky.com/c/NtrlBgNMUTcsk.gif' },
					{ name: 'Scofield State Park', value: 'https://www.cleardarksky.com/c/ScfSPUTcsk.gif' },
					{ name: 'Stansbury Park Observatory Complex (SPOC)', value: 'https://www.cleardarksky.com/c/SPOC2UTcsk.gif' },
					{ name: 'Weber County North Fork Park', value: 'https://www.cleardarksky.com/c/WbNFrkPUTcsk.gif' },
				),
		),
	async execute(interaction) {
		const locationURI = interaction.options.getString('location');
		const file = new AttachmentBuilder(locationURI);
		interaction.reply({ files: [file] });
	},
};
