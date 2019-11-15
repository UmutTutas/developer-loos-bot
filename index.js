const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

/* Rich Embed function */

function embed(baslik,message, color){
	var embed = new Discord.RichEmbed()
	.setColor(color)
	.setTitle(baslik)
	.setDescription(message)
	.setTimestamp()
	.setFooter('Developer LOOS', 'https://i.hizliresim.com/Z5qEVo.jpg');
	return embed
}

client.on('ready', () => {
  console.log(`-------------------\n Bot başarıyla çalıştırıldı ${client.user.tag} \n-------------------`);
});
client.on('guildMemberAdd', member => {
	member.guild.channels.get('628230826605412371').send(embed("Bir üye aramız katıldı!", member+", adlı üye aramıza katıldı", "#65DB32"));
	member.send("Merhaba, Okumadan geçme lütfen\n Bizim sunucumuzun amacı yardımlaşma, destek, sipariş vs. Sunucumuza gelerek bizi çok mutlu ettin! Eğer davet etmek istediğin bir kişi varsa sınırsız davet linki burada; \n https://discord.gg/NQD7Fz7");
	const verilecekRol = member.guild.roles.get("622826078888787978");
	member.addRole(verilecekRol).catch(console.error);
});
client.on('guildMemberRemove', member => {
member.guild.channels.get('628230826605412371').send(embed("Bir üye kaybettik!", member+", adlı üye aramızdan ayrıldı", "#DB2A36"));
});
// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('Pong!');
//   }
// });
client.on('message', msg => {
	if (msg.content == prefix+'davet') {
		msg.reply("Sunucumuzun sınırsız davet linki = https://discord.gg/NQD7Fz7");
	}
});

// client.on('message', msg => {
// 	if (msg.content == prefix+'cikismesaj') {
// 		msg.channel.send(embed("Çıkış yaptı","Deneme", "#7359E0"))
// 	}
// });
/* SOHBET SİLME */
client.on('message', message => {
    if (message.content == prefix+"temizle") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(list => {
                    message.channel.bulkDelete(list);
                }, err => {message.channel.send("Sohbeti silmen için izinin yok")})                        
        }
    }

});
client.login('process.env.BOT_TOKEN');
