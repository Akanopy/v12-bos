const Discord = require("discord.js")    
const client = new Discord.Client();       
const config = require("./config.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./Akanokomutlar/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} Akano komutlar yüklendi.`); 
  files.forEach(f => {                       
    let props = require(`./Akanokomutlar/${f}`);   
    console.log(`${props.config.name} komutlar yüklendi :O.`); 
    console.log(`successfully entered`)     
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})
client.login(config.token)
