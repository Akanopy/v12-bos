const Discord = require("discord.js");
const config = require('../Akanoayarlar.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "PLAYING", name: `devlopıd by akano :o`}, status: 'online' })
};

/*
WATCHING = İZLİYOR
PLAYING = OYNUYOR
LISTENING = DİNLİYOR

Status kısımları:
online = çevrimiçi
idle = boşta
dnd = rahatsız etmeyin

*/ 
