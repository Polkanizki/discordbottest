const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Loggato su ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
