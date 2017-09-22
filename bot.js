const Discord = require('discord.js');
const client = new Discord.Client();

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

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log(`Il bot e' stato avviato, con ${client.users.size} utenti, in ${client.channels.size} canali di ${client.guilds.size} server.`);
	console.log(`Loggato su ${client.user.tag}!`);
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
	if (!message.guild) return;
	if (message.guild.id === '187661382668386304') {
		if (message.channel.id === '359094130976096269') {
			if (message.content === '/a testing') {
				let ruolo = message.guild.roles.find("name", "Test🛠");
				if (message.member.roles.has(ruolo.id)) {
					message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
				} else {
					message.member.addRole('268306807301210122');
					message.reply("Sei stato abilitato per i **Canali Test**!");
				}
			} else if (message.content === '/r testing') {
				let ruolo = message.guild.roles.find("name", "Test🛠");
				if (message.member.roles.has(ruolo.id)) {
					message.member.removeRole('268306807301210122');
					message.reply("Sei stato rimosso dai **Canali Test**!");
				} else {
					message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
				}
			} else if (message.content === '/a lol') {
				let ruolo = message.guild.roles.find("name", "League of Legends🎮");
				if (message.member.roles.has(ruolo.id)) {
					message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
				} else {
					message.member.addRole('247751384345083904');
					message.reply("Sei stato abilitato per i canali di **League of Legends**!");
				}
			} else if (message.content === '/r lol') {
				let ruolo = message.guild.roles.find("name", "League of Legends🎮");
				if (message.member.roles.has(ruolo.id)) {
					message.member.removeRole('247751384345083904');
					message.reply("Sei stato rimosso dai canali di **League of Legends**!");
				} else {
					message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
				}
			} else if (message.content === '/a pokemon') {
				let ruolo = message.guild.roles.find("name", "Pokémon🎮");
				if (message.member.roles.has(ruolo.id)) {
					message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
				} else {
					message.member.addRole('251767481922879488');
					message.reply("Sei stato abilitato per i canali di **Pokemon**!");
				}
			} else if (message.content === '/r pokemon') {
				let ruolo = message.guild.roles.find("name", "Pokémon🎮");
				if (message.member.roles.has(ruolo.id)) {
					message.member.removeRole('251767481922879488');
					message.reply('Sei stato rimosso dai canali di **Pokemon**!');
				} else {
					message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
				}
			} else if (message.content === '/a hearthstone') {
				let ruolo = message.guild.roles.find("name", "HearthStone🎮");
				if (message.member.roles.has(ruolo.id)) {
					message.reply("Possiedi già questo ruolo. Usa /r <ruolo> per rimuoverlo");
				} else {
					message.member.addRole('346446742616801280');
					message.reply("Sei stato abilitato per i canali di **HearthStone**!");
				}
			} else if (message.content === '/r hearthstone') {
				let ruolo = message.guild.roles.find("name", "HearthStone🎮");
				if (message.member.roles.has(ruolo.id)) {
					message.member.removeRole('346446742616801280');
					message.reply("Sei stato rimosso dai canali di **HearthStone**!");
				} else {
					message.reply("Non possiedi questo ruolo. Usa /a <ruolo> per aggiungerlo");
				}
			}
		} else if (message.content === '/a testing' || message.content === '/a lol' || message.content === '/a pokemon' || message.content === '/a hearthstone' || message.content === '/r testing' || message.content === '/r lol' || message.content === '/r pokemon' || message.content === '/r hearthstone') {
			message.delete();
		}
	}
});

//Mio server

client.on('message', message => {
	if (!message.guild) return;
	if (message.guild.id === '359476597440512010') {
		if (message.content === '!italian') {
			let ruolo = message.guild.roles.find("name", "Italian");
			if (message.member.roles.has(ruolo.id)) {
				message.reply("You already have this role")
					.then(message => message.delete('10000'))
				message.delete('7000');
			} else {
				message.member.addRole('359653213621846016');
				message.reply("You've been added the role **Italian**. **YAY!**")
					.then(message => message.delete('10000'))
				message.delete('7000');
			}
		} else if (message.content === '!english') {
			let ruolo = message.guild.roles.find("name", "English");
			if (message.member.roles.has(ruolo.id)) {
				message.reply("You already have this role")
					.then(message => message.delete('10000'))
				message.delete('7000');
			} else {
				message.member.addRole('359653426306744321');
				message.reply("You've been added the role **English**. **YAY!**")
					.then(message => message.delete('10000'))
				message.delete('7000');
			}
		}
	}
});

client.on('message', message => {
	if (!message.guild) return;
	if (message.guild.id == '359476597440512010') {
		if (message.content.startsWith('!spam')) {
			var spam = message.content.split('-');
			var server = spam[1].split(';');
			var tipo = server[0];
			var nome = server[1];
			var descrizione = server[2];
			if(server[3].startsWith('https://discord.gg/')) {
				var link = server[3];
			} else if(server[3].startsWith('discord.gg/')) {
				var link = 'https://' + server[3];
			} else {
				var link = 'Link non disponibile';
			}
			var membri = server[4];
			if (message.channel.id == '359658704670425098' || message.channel.id == '359663809180467200') {
				message.delete();
				message.channel.send({embed: {
					color: 3447003,
					author: {
						name: message.author.username,
						icon_url: message.author.avatarURL
					},
					title: `${nome} ← Clicca per entrare`,
					url: `${link}`,
					fields: [{
						name: "Argomento server",
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
					}
					],
					footer: {
						icon_url: 'https://cdn.discordapp.com/attachments/314060737993768961/360086190436646914/globaldiscordlogo.png',
						text: `Global Discord | ${ore}:${minuti} del giorno ${giorno} ${mesi[mese]} ${anno}`
					}
				}});
			} else if (message.channel.id == '359658782751457290' || message.channel.id == '359663809180467200') {
				message.delete();
				message.channel.send({embed: {
					color: 3447003,
					author: {
						name: message.author.username,
						icon_url: message.author.avatarURL
					},
					title: `${nome} ← Click to join`,
					url: `${link}`,
					fields: [{
						name: "Server argument",
						value: `${tipo}`
					},
					{
						name: "Description",
						value: `${descrizione}`,
						inline: true
					},
					{
						name: "Actually members",
						value: `${membri} members`,
						inline: true
					}
					],
					timestamp: new Date(),
					footer: {
						icon_url: 'https://cdn.discordapp.com/attachments/314060737993768961/360086190436646914/globaldiscordlogo.png',
						text: 'Global Discord'
					}
				}});
			}
			//message.channel.send(server);
		} else {
			if (message.channel.id == '359658704670425098' || (message.channel.id == '359658782751457290')) {
				message.delete();
			} return;
		}
	}
});

//

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

//

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

client.on('message', message => {
	if(message.content === '/123prova') {
		message.channel.send('Funzia');
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

//
