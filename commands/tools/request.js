const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('request')
		.setDescription('Returns autocomplete')
		.addStringOption(option => option
			.setName('region')
			.setDescription('region of interest')
			.setAutocomplete(true)
			.setRequired(true)),
	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused(true);
		const choices = [
			// UTAH //
			{ name: '21200 W Road And I-84', value: 'https://www.cleardarksky.com/c/21200WRdUTcsk.gif' },
			{ name: 'Alpenglow Observatory', value: 'https://www.cleardarksky.com/c/AlpnglwObUTcsk.gif' },
			{ name: 'Aquarius Ranger Station', value: 'https://www.cleardarksky.com/c/AqrRngUTcsk.gif' },
			{ name: 'Boulder (UT)', value: 'https://www.cleardarksky.com/c/BldrUTcsk.gif' },
			{ name: 'Bryce Canyon National Park', value: 'https://www.cleardarksky.com/c/BrycCNPUTcsk.gif' },
			{ name: 'Builderbug Observatory', value: 'https://www.cleardarksky.com/c/BdrBgObUTcsk.gif' },
			{ name: 'Camp Floyd State Park', value: 'https://www.cleardarksky.com/c/CpFldPUTcsk.gif' },
			{ name: 'Canyonlands National Park', value: 'https://www.cleardarksky.com/c/CnyNPUTcsk.gif' },
			{ name: 'Capitol Reef National Park', value: 'https://www.cleardarksky.com/c/CptRfNPUTcsk.gif' },
			{ name: 'Cedar Breaks National Monument', value: 'https://www.cleardarksky.com/c/CBNMPSUTcsk.gif' },
			{ name: 'Cedar City', value: 'https://www.cleardarksky.com/c/CdrCtyUTcsk.gif' },
			{ name: 'Colony Skies Observatory', value: 'https://www.cleardarksky.com/c/CnySkObUTcsk.gif' },
			{ name: 'Dark Ranger Observatory', value: 'https://www.cleardarksky.com/c/DrkRngrOb2UTcsk.gif' },
			{ name: 'Dark Ranger Wasatch', value: 'https://www.cleardarksky.com/c/EstCynSPUTcsk.gif' },
			{ name: 'Dead Horse Point State Park', value: 'https://www.cleardarksky.com/c/DdHrsSPUTcsk.gif' },
			{ name: 'Depth Afield Observatory', value: 'https://www.cleardarksky.com/c/DpthAfObUTcsk.gif' },
			{ name: 'Dry Creek View Observatory', value: 'https://www.cleardarksky.com/c/DrCrkVObUTcsk.gif' },
			{ name: 'Elizabeth Ridge', value: 'https://www.cleardarksky.com/c/LzRdgUTcsk.gif' },
			{ name: 'Emigration Canyon Lookout', value: 'https://www.cleardarksky.com/c/EmgrCyTUcsk.gif' },
			{ name: 'Fish Lake', value: 'https://www.cleardarksky.com/c/FshLkUTcsk.gif' },
			{ name: 'Flaming Gorge Observatory', value: 'https://www.cleardarksky.com/c/FlmngGrObUTcsk.gif' },
			{ name: 'Forest Road 006 Site 1', value: 'https://www.cleardarksky.com/c/FrstRd1UTcsk.gif' },
			{ name: 'Garden City', value: 'https://www.cleardarksky.com/c/GrdnCtyUTcsk.gif' },
			{ name: 'Goblin Valley State Park', value: 'https://www.cleardarksky.com/c/GblnVllySPUTcsk.gif' },
			{ name: 'Golden Spike National Historical Park', value: 'https://www.cleardarksky.com/c/GSNHPUTcsk.gif' },
			{ name: 'Green River', value: 'https://www.cleardarksky.com/c/GrnRvrUTcsk.gif' },
			{ name: 'HiRes 1', value: 'https://www.cleardarksky.com/c/FlysEye1UTcsk.gif' },
			{ name: 'HiRes 2', value: 'https://www.cleardarksky.com/c/FlysEye2UTcsk.gif' },
			{ name: 'High Meadows Observatory', value: 'https://www.cleardarksky.com/c/HghMdwObUTcsk.gif' },
			{ name: 'Highland', value: 'https://www.cleardarksky.com/c/HgndUTcsk.gif' },
			{ name: 'Huntsville', value: 'https://www.cleardarksky.com/c/HntsvUTcsk.gif' },
			{ name: 'Jaffa Observatory', value: 'https://www.cleardarksky.com/c/JffObUTcsk.gif' },
			{ name: 'Kayenta Observatory', value: 'https://www.cleardarksky.com/c/KytnObUTcsk.gif' },
			{ name: 'Knoll', value: 'https://www.cleardarksky.com/c/KnllUTcsk.gif' },
			{ name: 'LEAR Observatory', value: 'https://www.cleardarksky.com/c/LEARObUTcsk.gif' },
			{ name: 'Lakeside Site', value: 'https://www.cleardarksky.com/c/SLAS2UTcsk.gif' },
			{ name: 'Layton', value: 'https://www.cleardarksky.com/c/LytnUTcsk.gif' },
			{ name: 'Leeds', value: 'https://www.cleardarksky.com/c/LeedsUTcsk.gif' },
			{ name: 'Logan', value: 'https://www.cleardarksky.com/c/LoganUTcsk.gif' },
			{ name: 'Mars Desert Research Station', value: 'https://www.cleardarksky.com/c/MDRSUTcsk.gif' },
			{ name: 'Moab Observatory', value: 'https://www.cleardarksky.com/c/MoabObUTcsk.gif' },
			{ name: 'Monument Valley', value: 'https://www.cleardarksky.com/c/MnmntVllyUTcsk.gif' },
			{ name: 'Moose Springs', value: 'https://www.cleardarksky.com/c/JCObUTcsk.gif' },
			{ name: 'Morton Observatory', value: 'https://www.cleardarksky.com/c/MrtnObUTcsk.gif' },
			{ name: 'Mound City Observatory', value: 'https://www.cleardarksky.com/c/MndCtObUTcsk.gif' },
			{ name: 'Mountain Skies Observatory', value: 'https://www.cleardarksky.com/c/MtnSkysObUTcsk.gif' },
			{ name: 'Mountainville Observatory', value: 'https://www.cleardarksky.com/c/MtnVObUTcsk.gif' },
			{ name: 'Natural Bridges National Monument', value: 'https://www.cleardarksky.com/c/NtrlBgNMUTcsk.gif' },
			{ name: 'Nocturne Observatory', value: 'https://www.cleardarksky.com/c/AlfAstObUTcsk.gif' },
			{ name: 'Observa-Torrey', value: 'https://www.cleardarksky.com/c/ObTryObUTcsk.gif' },
			{ name: 'Ogden', value: 'https://www.cleardarksky.com/c/OgdnUTcsk.gif' },
			{ name: 'Orson Pratt Observatory', value: 'https://www.cleardarksky.com/c/OrsPrtObUTcsk.gif' },
			{ name: 'Painted Rocks Campground', value: 'https://www.cleardarksky.com/c/PntRckUTcsk.gif' },
			{ name: 'Panorama Point', value: 'https://www.cleardarksky.com/c/PnrmPtUTcsk.gif' },
			{ name: 'ROVOR', value: 'https://www.cleardarksky.com/c/ROVORUTcsk.gif' },
			{ name: 'Red Mountain Observatory', value: 'https://www.cleardarksky.com/c/IvTcnObUTcsk.gif' },
			{ name: 'Saint George', value: 'https://www.cleardarksky.com/c/StGrgUTcsk.gif' },
			{ name: 'Saleratus Ranch', value: 'https://www.cleardarksky.com/c/SlrtRnchUTcsk.gif' },
			{ name: 'Salt Lake City', value: 'https://www.cleardarksky.com/c/SaltLakeUTcsk.gif' },
			{ name: 'Sandy', value: 'https://www.cleardarksky.com/c/SndyUTcsk.gif' },
			{ name: 'Scofield State Park', value: 'https://www.cleardarksky.com/c/ScfSPUTcsk.gif' },
			{ name: 'Shaggy Mountain Observatory', value: 'https://www.cleardarksky.com/c/ShgMtObUTcsk.gif' },
			{ name: 'Sierra La Sal Observatory', value: 'https://www.cleardarksky.com/c/SrLSlObUTcsk.gif' },
			{ name: 'Sky Hound Observatory', value: 'https://www.cleardarksky.com/c/SkyHndObUTcsk.gif' },
			{ name: 'Sky Retreat at Westwater', value: 'https://www.cleardarksky.com/c/WstwtrARUTcsk.gif' },
			{ name: 'Spanish Fork', value: 'https://www.cleardarksky.com/c/SpnsFkUTcsk.gif' },
			{ name: 'Split Mountain Campground', value: 'https://www.cleardarksky.com/c/SptMtCmpUTcsk.gif' },
			{ name: 'Stansbury Park Observatory Complex (SPOC)', value: 'https://www.cleardarksky.com/c/SPOC2UTcsk.gif' },
			{ name: 'Stellar Vista Observatory', value: 'https://www.cleardarksky.com/c/StrVstObUTcsk.gif' },
			{ name: 'Strawberry Point Observatory', value: 'https://www.cleardarksky.com/c/StrwbrryPObUTcsk.gif' },
			{ name: 'Telescope Array Black Rock Mesa FD', value: 'https://www.cleardarksky.com/c/TcpAr4UTcsk.gif' },
			{ name: 'Telescope Array Central Laser Facility', value: 'https://www.cleardarksky.com/c/TcpAryObUTcsk.gif' },
			{ name: 'Telescope Array Long Ridge FD', value: 'https://www.cleardarksky.com/c/TcpAr3UTcsk.gif' },
			{ name: 'Telescope Array Middle Drum FD', value: 'https://www.cleardarksky.com/c/TcpAr2UTcsk.gif' },
			{ name: 'The Copernicus Observatory', value: 'https://www.cleardarksky.com/c/CprObUTcsk.gif' },
			{ name: 'Trout Creek Observing Site', value: 'https://www.cleardarksky.com/c/TrtCrkOscsk.gif' },
			{ name: 'Vermillion Cliffs Observatory', value: 'https://www.cleardarksky.com/c/Vr10E6ObUTcsk.gif' },
			{ name: 'Weber County North Fork Park', value: 'https://www.cleardarksky.com/c/WbNFrkPUTcsk.gif' },
			{ name: 'Wedge Overlook', value: 'https://www.cleardarksky.com/c/WdgOvrUTcsk.gif' },
			{ name: 'West Jordan', value: 'https://www.cleardarksky.com/c/WstJrdnUTcsk.gif' },
			{ name: 'West Mountain', value: 'https://www.cleardarksky.com/c/WstMtnUTcsk.gif' },
			{ name: 'Willard L. Eccles Observatory', value: 'https://www.cleardarksky.com/c/WlrdEcObUTcsk.gif' },
			{ name: 'Wolf Creek Observing Site', value: 'https://www.cleardarksky.com/c/WlfCrOsUTcsk.gif' },
			{ name: 'Zion Gateway to the Stars', value: 'https://www.cleardarksky.com/c/ZgtwysUTcsk.gif' },
			{ name: 'Zion Lodge', value: 'https://www.cleardarksky.com/c/ZnLdgMNcsk.gif' },
		];
		const filtered = choices.filter(choice => choice.name
			.includes(focusedValue),
		);
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
		const option = interaction.option.getString('region');
		await interaction.reply({ content: `Returning forecast for ${option}` });
	},
};