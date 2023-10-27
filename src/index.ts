const dev = false;

  // Necessary things to Import
  import { Client, Collection, GatewayIntentBits } from 'discord.js';
  import { joinVoiceChannel } from '@discordjs/voice';

  import dotenv from 'dotenv';
  
  dotenv.config()
  let myPriority:string;
  let spectatorBotId:string;
  let interval:any;

  if(dev){runBot('')}
  else{
// login to spectator account
let spectatorClient:any = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

  // Login With Token
spectatorClient.login(process.env['SPEC_TOKEN']).catch((err:any)=>{process.exit()});

// Spectator on Ready
spectatorClient.once('ready', (c:any)=>{
  // find my priority
  spectatorBotId = c.user.id;
  myPriority = spectatorClient.guilds.cache.get('864792830673027102').members.cache.get(spectatorBotId).nickname.split(' ')[1]

  // join vc
  let channel = spectatorClient.channels.cache.get('1095956100647497738')
  joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
  console.log('Started watching Bonkhalla, Priority: ' + myPriority)

  // Checking interval

    interval = setInterval(() => {
      check()
    }, 10_000);


})
//neverdie, try
require(`./handlers/crash_handler`)

// Infinity Loop
let check = () => {
  let isAlive:any;
  let presence = spectatorClient.guilds.cache.get('864792830673027102').members.cache.get('819227099340079145').presence;
  if(presence){
    isAlive = presence.status !== 'offline'
  }else if(!presence){
    isAlive = false;
  }

  if(isAlive){
    presence.destroy()
    isAlive.destroy()
    return;}
  else if(!isAlive){
    let run = () => {
      runBot(spectatorClient);
      spectatorClient.channels.cache.get('1095959354244603984').send({content: `${process.env['HOSTNAME']} is taking over the Host`})
      console.log('bot is offline, starting bonkhalla')
      clearInterval(interval);
    }
    // check vc members
    let attendance:any = [];
    let vcMembers = spectatorClient.channels.cache.get('1095956100647497738').members

    // if there is anyone else
     if(vcMembers.size > 1){
      spectatorClient.channels.cache.get('1095956100647497738').members.forEach((element:any) => {
        attendance.push(element.nickname.split(' ')[1])
      });
      attendance.sort()
      if(attendance[0] == myPriority){run();}
      else {spectatorClient.channels.cache.get('1095959354244603984').send({content: `priority: ${attendance[0]} Will take over`})}
    }
    // if others are sleeping
    else if (vcMembers.size == 1 || vcMembers.size == 0){run();} 
  }
} 
  }
// Bot launching
function runBot(spectatorClient:any) {
// Creating bot
const client:any = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// Login With Token
client.login(process.env['TOKEN']).catch((err:any)=>{process.exit()});
// destroy spectator
client.on('ready', ()=>{
    console.log('shutting down spectator')
    dev? null : spectatorClient.destroy();
    
})

// Vc Record Map 
client.jointocreatemap = new Map();

// handlers
client.events = new Collection();
client.slashcmd = new Collection();
client.buttons = new Collection();
client.menus = new Collection();


// Run handler Files
['event_handler' , 'slashcmd_handler', 'button_handler', 'menu_handler'].forEach(handler =>{
  
  let handlr = require(`./handlers/${handler}`)
  handlr.default(client)
})
}
