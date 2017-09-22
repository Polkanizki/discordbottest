const Discord = require('discord.js');
const client = new Discord.Client();
client.login('process.env.BOT_TOKEN');

client.on('ready', message => {
  console.log(`Bot attivo su ${client.user.tag}`);
}

client.on('message', message => {
  if(message.content === 'ping') {
    message.channel.send('pong');
  }
});
