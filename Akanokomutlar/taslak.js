const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
   message.react("slm :o");
  

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["31"]
};

module.exports.help = {
  name: "taslak",
  description: "",
  usage: ""
};
