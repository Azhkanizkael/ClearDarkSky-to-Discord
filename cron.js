const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');
const auth = require('./config.json');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
	// Post @ 6am every day
	cron.schedule('0 0 6 * * *', function() {
		console.log('creating posts!');
		fs.readFile('./commands/data/subscriptions.json', 'utf8', (err, data) => {
			if (err) throw err;
			const dataObject = JSON.parse(data);
			// console.log(dataObject);
			for (let i = 0; i < dataObject.length; i++) {
				const subscribedGuild = client.guilds.cache.get(dataObject[i].guildId);
				const subscribedChannel = client.channels.cache.get(dataObject[i].channelId);
				console.log(`posting ${dataObject[i].URI} to ${subscribedGuild.name} in ${subscribedChannel.name}`);
				subscribedChannel.send(dataObject[i].URI);
			}
		});
	}, {
		timezone: 'America/Denver',
	});
});

client.login(auth.token);