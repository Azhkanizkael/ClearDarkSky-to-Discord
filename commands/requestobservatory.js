const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('requestobservatory')
		.setDescription('Search Groups')
		.addSubcommand(subcommand =>
			subcommand
				.setName('am')
				.setDescription('Which observatory do you want? (a-m)')
				.addStringOption(option =>
					option.setName('location')
						.setDescription('Which do you want?')
						.setRequired(true)
						.addChoices(
							{ name: 'Alpenglow Observatory', value: 'https://www.cleardarksky.com/c/AlpnglwObUTcsk.gif' },
							{ name: 'Builderbug Observatory', value: 'https://www.cleardarksky.com/c/BdrBgObUTcsk.gif' },
							{ name: 'Colony Skies Observatory', value: 'https://www.cleardarksky.com/c/CnySkObUTcsk.gif' },
							{ name: 'Dark Ranger Observatory', value: 'https://www.cleardarksky.com/c/DrkRngrOb2UTcsk.gif' },
							{ name: 'Depth Afield Observatory', value: 'https://www.cleardarksky.com/c/DpthAfObUTcsk.gif' },
							{ name: 'Dry Creek View Observatory', value: 'https://www.cleardarksky.com/c/DrCrkVObUTcsk.gif' },
							{ name: 'Flaming Gorge Observatory', value: 'https://www.cleardarksky.com/c/FlmngGrObUTcsk.gif' },
							{ name: 'High Meadows Observatory', value: 'https://www.cleardarksky.com/c/HghMdwObUTcsk.gif' },
							{ name: 'Jaffa Observatory', value: 'https://www.cleardarksky.com/c/JffObUTcsk.gif' },
							{ name: 'Kayenta Observatory', value: 'https://www.cleardarksky.com/c/KytnObUTcsk.gif' },
							{ name: 'LEAR Observatory', value: 'https://www.cleardarksky.com/c/LEARObUTcsk.gif' },
							{ name: 'Moab Observatory', value: 'https://www.cleardarksky.com/c/MoabObUTcsk.gif' },
							{ name: 'Morton Observatory', value: 'https://www.cleardarksky.com/c/MrtnObUTcsk.gif' },
							{ name: 'Mound City Observatory', value: 'https://www.cleardarksky.com/c/MndCtObUTcsk.gif' },
							{ name: 'Mountain Skies Observatory', value: 'https://www.cleardarksky.com/c/MtnSkysObUTcsk.gif' },
							{ name: 'Mountainville Observatory', value: 'https://www.cleardarksky.com/c/MtnVObUTcsk.gif' },
						),
				),
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName('nz')
				.setDescription('Which observatory do you want? (n-z)')
				.addStringOption(option =>
					option.setName('location')
						.setDescription('Which do you want?')
						.setRequired(true)
						.addChoices(
							{ name: 'Nocturne Observatory', value: 'https://www.cleardarksky.com/c/AlfAstObUTcsk.gif' },
							{ name: 'Orson Pratt Observatory', value: 'https://www.cleardarksky.com/c/OrsPrtObUTcsk.gif' },
							{ name: 'Red Mountain Observatory', value: 'https://www.cleardarksky.com/c/IvTcnObUTcsk.gif' },
							{ name: 'Shaggy Mountain Observatory', value: 'https://www.cleardarksky.com/c/ShgMtObUTcsk.gif' },
							{ name: 'Sierra La Sal Observatory', value: 'https://www.cleardarksky.com/c/SrLSlObUTcsk.gif' },
							{ name: 'Sky Hound Observatory', value: 'https://www.cleardarksky.com/c/SkyHndObUTcsk.gif' },
							{ name: 'Stellar Vista Observatory', value: 'https://www.cleardarksky.com/c/StrVstObUTcsk.gif' },
							{ name: 'Strawberry Point Observatory', value: 'https://www.cleardarksky.com/c/StrwbrryPObUTcsk.gif' },
							{ name: 'The Copernicus Observatory', value: 'https://www.cleardarksky.com/c/CprObUTcsk.gif' },
							{ name: 'Vermillion Cliffs Observatory', value: 'https://www.cleardarksky.com/c/Vr10E6ObUTcsk.gif' },
							{ name: 'Willard L. Eccles Observatory', value: 'https://www.cleardarksky.com/c/WlrdEcObUTcsk.gif' },
						),
				),
		),
	async execute(interaction) {
		const locationURI = interaction.options.getString('location');
		const file = new AttachmentBuilder(locationURI);
		interaction.reply({ files: [file] });
	},
};
