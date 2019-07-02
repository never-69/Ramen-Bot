const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTk1NzIyNTg3NTczNzE0OTQ0.XRvIBQ.SqmxFhhVNSLSVCeboWCYxOE1OYE'

bot.on('ready', () =>{
  console.log('Bot is online!');
})

bot.on('message', msg=>{
  if(msg.content === 'hi'){
    msg.reply('hi friend :D!')
  }
})

bot.login(token);
