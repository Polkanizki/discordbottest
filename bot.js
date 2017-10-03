const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

var data = new Date();
var ore = data.getHours();
var minuti = data.getMinutes();
var giorno = data.getDate();
var giornosettimana = data.getDay();
var giornisettimana = ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato"];
var mese = data.getMonth();
var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
var anno = data.getFullYear();
var admin = '187657725407264768';

client.on('ready', () => {
    console.log(`Il bot e' stato avviato su ${client.user.tag}!, con ${client.users.size} utenti, in ${client.channels.size} canali di ${client.guilds.size} server.`);
	client.user.setPresence({ game: {
		name: `${client.guilds.size} server ~Polkanizki`, type: 0
	}});
});

client.on('reconnecting', () => {
	console.log("Errore di connessione. Riconnessione in corso...");
});

client.on('resume', () => {
	console.log("Riconnessione effettuata.");
});

setInterval(function() {
	var rand = Math.floor((Math.random() * 10) + 1);
	switch(rand) {
		case '1':
			var stato = `Ascoltare musica`;
			break;
			
		case '2':
			var stato = `~Polkanizki`;
			break;

		case '3':
			var stato = `${client.guilds.size} server`;
			break;

		case '4':
			var stato = `Nderr merg`;
			break;

		case '5':
			var stato = `Yasuo Cancro`;
			break;

		case '6':
			var stato = `spoilerare che L muore`;
			break;

		case '7':
			var stato = `Gang`;
			break;

		case '8':
			var stato = `Fare il caffe`;
			break;

		default:
			var stato = `Usa /help per una lista di comandi`;
			break;
	}
	client.user.setPresence({ game: {
		name: `${stato}`, type: 0
	}});
}, 10000);

client.on('message', message => {
    if (message.content === '/ping') {
        message.channel.send('pong');
    }
});

client.on('message', message => {
    if (message.content === 'il mio avatar') {
        message.reply(message.author.avatarURL);
    }
});

client.on('message', message => {
	if(message.content === '/help') {
		if(message.channel.type === 'text') {
			message.channel.send("Messaggio inviato **__in privato__**");
		}
		console.log(`• Messaggio privato a ${message.author.tag} alle ore ${ore}:${minuti} del giorno ${giorno} ${mesi[mese]} ${anno}`);
		message.author.send({embed: {
			color: 7419530,
			title: `**Ciao, ${message.author.username}!**`,
			description: "Comandi disponibili",
			fields: [{
				name: "Solo server",
				value: "- /ping\n- /join\n- /leave",
				inline: true
			},
			{
				name: "Anche privato",
				value: "- il mio avatar\n- /help",
				inline: true
			},
			{
				name: "Contattami",
				value: "Per ulteriori suggerimenti/feedback parla in <#360812737841856513>"
			}
			],
			footer: {
				text: `${ore}:${minuti} del giorno ${giorno} ${mesi[mese]} ${anno}`
			}
		}});
	}
});

/*client.on('message', message => {
	if (message.content === '/shutdown') {
		if (message.author.id === '187657725407264768') {
			message.channel.send("**Spegnimento...**")
				.then(client.destroy)
				.then(process.exit)
				.catch(process.exit)
		} else {
			message.channel.send("**NON PUOI DIRMI COSA FAREEEH!!**");
			console.log(`${message.author.tag} ha tentato di spegnere il bot`);
		}
	}
});*/

client.on('message', message => {
    if(!message.guild) return;
	if(message.guild.id == '187661382668386304') {
        if (message.content === '/a testing') {
            let ruolo = message.guild.roles.find("name", "Test");
            if (message.member.roles.has(ruolo.id)) {
                message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
            } else {
                message.member.addRole('268306807301210122');
                message.reply("Sei stato abilitato per i **Canali Test**!");
            }
        } else if (message.content === '/r testing') {
            let ruolo = message.guild.roles.find("name", "Test");
            if (message.member.roles.has(ruolo.id)) {
                message.member.removeRole('268306807301210122');
                message.reply("Sei stato rimosso dai **Canali Test**!");
            } else {
                message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
            }
        } else if (message.content === '/a lol') {
            let ruolo = message.guild.roles.find("name", "League of Legends");
            if (message.member.roles.has(ruolo.id)) {
                message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
            } else {
                message.member.addRole('247751384345083904');
                message.reply("Sei stato abilitato per i canali di **League of Legends**!");
            }
        } else if (message.content === '/r lol') {
            let ruolo = message.guild.roles.find("name", "League of Legends");
            if (message.member.roles.has(ruolo.id)) {
                message.member.removeRole('247751384345083904');
                message.reply("Sei stato rimosso dai canali di **League of Legends**!");
            } else {
                message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
            }
        } else if (message.content === '/a pokemon') {
            let ruolo = message.guild.roles.find("name", "Pokémon");
            if (message.member.roles.has(ruolo.id)) {
                message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
            } else {
                message.member.addRole('251767481922879488');
                message.reply("Sei stato abilitato per i canali di **Pokemon**!");
            }
        } else if (message.content === '/r pokemon') {
            let ruolo = message.guild.roles.find("name", "Pokémon");
            if (message.member.roles.has(ruolo.id)) {
                message.member.removeRole('251767481922879488');
                message.reply('Sei stato rimosso dai canali di **Pokemon**!');
            } else {
                message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
            }
        } else if (message.content === '/a hearthstone') {
            let ruolo = message.guild.roles.find("name", "HearthStone");
            if (message.member.roles.has(ruolo.id)) {
                message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
            } else {
                message.member.addRole('346446742616801280');
                message.reply("Sei stato abilitato per i canali di **HearthStone**!");
            }
        } else if (message.content === '/r hearthstone') {
            let ruolo = message.guild.roles.find("name", "HearthStone");
            if (message.member.roles.has(ruolo.id)) {
                message.member.removeRole('346446742616801280');
                message.reply("Sei stato rimosso dai canali di **HearthStone**!");
            } else {
                message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
            }
        }
    }
});

// Canali vocali
client.on('message', message => {
    if (!message.guild) return;
    if (message.content === '/join') {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
            .then(connection => {
				message.reply('Connesso con successo!');
				message.channel.send("**__Questo comando é in fase di test ed é disponibile solo una traccia musicale__**");
                const dispatcher = connection.playFile('./The_Calling.mp3');
                })
                .catch(console.log);
        } else {
            message.reply('Devi essere prima in un canale vocale!');
        }
    }
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content === '/leave') {
		message.reply("Disconnesso con successo!");
        message.member.voiceChannel.leave();		
	}
});

//Prove
client.on('message', message => {
	if (message.content === '/messaggiobello') {
		message.channel.send({embed: {
			color: 3447003,
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			title: "A pucchiacc e mammt",
			url: "https://t.me/polkanizki",
			fields: [{
				name: "Non so che cazzo sono",
				value: "Non so che cazzo ci entra qui, ma c'entra sicuramente con la prima."
			},
			{
				name: "Qualcos'altro",
				value: "Dovrebbe essere qualcosa che [funziona così](discordapp.com/404)"
			},
			{
				name: "Un altra cosa",
				value: "Posso mettere *robe* belle **__tipo così__**"
			}
			],
			description: "Non ho mai schiacciato l'ombrello di mio zio",
			timestamp: new Date(),
			footer: {
				icon_url: client.user.avatarURL,
				text: "Mammt Corporation ©"
			}
		}});
	}
});

client.on('message', message => {
	if (message.content === '/ruolo') {
		let ruolo = message.guild.roles.find("name", "League of Legends🎮");
		if (message.member.roles.has(ruolo.id)) {
			message.channel.send("Si");
		} else {
			message.channel.send("No");
		}
	}
})

client.on('message', message => {
	if (!message.guild) return;
	if (message.guild.id == '359476597440512010') {
		if (message.content.startsWith('!dioporcospam')) {
			var spam = message.content.split('?');
			var server = spam[1].split(';');
			var tipo = server[0];
			var nome = server[1];
			var descrizione = server[2];
			var link = server[3];
			var membri = server[4];
			//message.channel.send(`Argomento Server: ${tipo}\nNome: ${nome}\nDescrizione: ${descrizione}\nLink: ${link}\nUtenza: ${membri} membri`);
			message.channel.send({embed: {
				color: 3447003,
				author: {
					name: message.author.username,
					icon_url: message.author.avatarURL
				},
				title: `${nome}`,
				url: `${link}`,
				fields: [{
					name: "Argomento Server",
					value: `${tipo}`
				},
				{
					name: "Descrizione",
					value: `${descrizione}`,
					inline: true
				},
				{
					name: "Utenza attuale",
					value: `${membri} membri`,
					inline: true
				}],
				footer: {
					icon_url: 'https://cdn.discordapp.com/attachments/314060737993768961/360086190436646914/globaldiscordlogo.png',
					text: `${ore}:${minuti} del giorno ${giorno} ${mesi[mese]} ${anno}`
				}
			}});
		}
	}
});



/*client.on('message', message => {
	if (!message.guild) return;
	if (message.guild.id == '359476597440512010') {
		if (message.channel.id == '359658782751457290' || message.channel.id == '359658704670425098') {
			message.react("👎")
			.then(message.react("👍"));
		}
	}
});*/

/*client.on('message', message => {
	if (!message.guild) return;
	if (message.guild.id == '359476597440512010') {
		if (message.content == '!ueue') {
			message.channel.send("Cicorie")
			.then(client.user.message.react('👍'))
			.then(client.user.message.react('👎'));
		}
	}
});*/

/*client.on('message', message => {
	if (message.content === "/scontro" && message.author.id === '187657725407264768') {
		message.channel.send({embed: {
			color: 15844367,
			author: {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			title: "Preparatevi allo Scontro!",
			url: "http://paghmtelegram.challonge.com/it/paghmoflegends2017",
			fields: [{
				name: "Posizione Scontro",
				value: "Girone 1"
			},
			{
				name: "Giocatore 1",
				value: "",
				inline: true
			},
			{
				name: "Giocatore 2",
				value: "",
				inline: true
			},
			{
				name: "Meglio di",
				value: "1"
			}
			],
			timestamp: new Date(),
			footer: {
				icon_url: "https://cdn.discordapp.com/attachments/314060737993768961/354355015219019786/unknown.png",
				text: "PAGHM"
			}
		}});
	}
});*/