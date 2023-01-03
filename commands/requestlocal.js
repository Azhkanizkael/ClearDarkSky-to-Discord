const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('requestlocal')
		.setDescription('Search Groups')
		.addSubcommand(subcommand =>
			subcommand
				.setName('am')
				.setDescription('Which local do you want? (a-m)')
				.addStringOption(option =>
					option.setName('location')
						.setDescription('Which do you want?')
						.setRequired(true)
						.addChoices(
							{ name: '21200 W Road And I-84', value: 'https://www.cleardarksky.com/c/21200WRdUTcsk.gif' },
							{ name: 'Aquarius Ranger Station', value: 'https://www.cleardarksky.com/c/AqrRngUTcsk.gif' },
							{ name: 'Boulder', value: 'https://www.cleardarksky.com/c/BldrUTcsk.gif' },
							{ name: 'Cedar City', value: 'https://www.cleardarksky.com/c/CdrCtyUTcsk.gif' },
							{ name: 'Dark Ranger Wasatch', value: 'https://www.cleardarksky.com/c/EstCynSPUTcsk.gif' },
							{ name: 'Elizabeth Ridge', value: 'https://www.cleardarksky.com/c/LzRdgUTcsk.gif' },
							{ name: 'Emigration Canyon Lookout', value: 'https://www.cleardarksky.com/c/EmgrCyTUcsk.gif' },
							{ name: 'Fish Lake', value: 'https://www.cleardarksky.com/c/FshLkUTcsk.gif' },
							{ name: 'Forest Road 006 Site 1', value: 'https://www.cleardarksky.com/c/FrstRd1UTcsk.gif' },
							{ name: 'Garden City', value: 'https://www.cleardarksky.com/c/GrdnCtyUTcsk.gif' },
							{ name: 'Green River', value: 'https://www.cleardarksky.com/c/GrnRvrUTcsk.gif' },
							{ name: 'HiRes 1', value: 'https://www.cleardarksky.com/c/FlysEye1UTcsk.gif' },
							{ name: 'HiRes 2', value: 'https://www.cleardarksky.com/c/FlysEye2UTcsk.gif' },
							{ name: 'Highland', value: 'https://www.cleardarksky.com/c/HgndUTcsk.gif' },
							{ name: 'Huntsville', value: 'https://www.cleardarksky.com/c/HntsvUTcsk.gif' },
							{ name: 'Knoll', value: 'https://www.cleardarksky.com/c/KnllUTcsk.gif' },
							{ name: 'Lakeside Site', value: 'https://www.cleardarksky.com/c/SLAS2UTcsk.gif' },
							{ name: 'Layton', value: 'https://www.cleardarksky.com/c/LytnUTcsk.gif' },
							{ name: 'Leeds', value: 'https://www.cleardarksky.com/c/LeedsUTcsk.gif' },
							{ name: 'Logan', value: 'https://www.cleardarksky.com/c/LoganUTcsk.gif' },
							{ name: 'Mars Desert Research Station', value: 'https://www.cleardarksky.com/c/MDRSUTcsk.gif' },
							{ name: 'Monument Valley', value: 'https://www.cleardarksky.com/c/MnmntVllyUTcsk.gif' },
							{ name: 'Moose Springs', value: 'https://www.cleardarksky.com/c/JCObUTcsk.gif' },
						),
				),
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName('nz')
				.setDescription('Which local do you want? (n-z)')
				.addStringOption(option =>
					option.setName('location')
						.setDescription('Which do you want?')
						.setRequired(true)
						.addChoices(
							{ name: 'Observa-Torrey', value: 'https://www.cleardarksky.com/c/ObTryObUTcsk.gif' },
							{ name: 'Ogden', value: 'https://www.cleardarksky.com/c/OgdnUTcsk.gif' },
							{ name: 'Painted Rocks Campground', value: 'https://www.cleardarksky.com/c/PntRckUTcsk.gif' },
							{ name: 'Panorama Point', value: 'https://www.cleardarksky.com/c/PnrmPtUTcsk.gif' },
							{ name: 'ROVOR', value: 'https://www.cleardarksky.com/c/ROVORUTcsk.gif' },
							{ name: 'Saint George', value: 'https://www.cleardarksky.com/c/StGrgUTcsk.gif' },
							{ name: 'Saleratus Ranch', value: 'https://www.cleardarksky.com/c/SlrtRnchUTcsk.gif' },
							{ name: 'Salt Lake City', value: 'https://www.cleardarksky.com/c/SaltLakeUTcsk.gif' },
							{ name: 'Sandy', value: 'https://www.cleardarksky.com/c/SndyUTcsk.gif' },
							{ name: 'Sky Retreat at Westwater', value: 'https://www.cleardarksky.com/c/WstwtrARUTcsk.gif' },
							{ name: 'Spanish Fork', value: 'https://www.cleardarksky.com/c/SpnsFkUTcsk.gif' },
							{ name: 'Split Mountain Campground', value: 'https://www.cleardarksky.com/c/SptMtCmpUTcsk.gif' },
							{ name: 'Trout Creek Observing Site', value: 'https://www.cleardarksky.com/c/TrtCrkOscsk.gif' },
							{ name: 'Wedge Overlook', value: 'https://www.cleardarksky.com/c/WdgOvrUTcsk.gif' },
							{ name: 'West Jordan', value: 'https://www.cleardarksky.com/c/WstJrdnUTcsk.gif' },
							{ name: 'West Mountain', value: 'https://www.cleardarksky.com/c/WstMtnUTcsk.gif' },
							{ name: 'Wolf Creek Observing Site', value: 'https://www.cleardarksky.com/c/WlfCrOsUTcsk.gif' },
							{ name: 'Zion Gateway to the Stars', value: 'https://www.cleardarksky.com/c/ZgtwysUTcsk.gif' },
							{ name: 'Zion Lodge', value: 'https://www.cleardarksky.com/c/ZnLdgMNcsk.gif' },
						),
				),
		),
	async execute(interaction) {
		const locationURI = interaction.options.getString('location');
		const file = new AttachmentBuilder(locationURI);
		interaction.reply({ files: [file] });
	},
};
