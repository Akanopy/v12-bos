const Discord = require('discord.js');
const db = require('quick.db')
 exports.run = (client, message) => {
 

const Akano = new Discord.MessageEmbed()
.setColor("#66CC")
.setDescription(`Sunucuda **${message.guild.memberCount}** Kişi Var. `)
 return message.channel.send(Akano)  
 };

 exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};
