const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('NzM1MjcyMjkwNTQyOTQ0MzU3.Xxd1rg.sgS1mBC4O_G5vcQTmXLzRjijTcs');
