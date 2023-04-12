  // Necessary things to Import
  import { Client, Collection, GatewayIntentBits } from 'discord.js';
  import dotenv from 'dotenv';
  
  dotenv.config()

// login to spectator account
const spectatorClient:any = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildPresences], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

  // Login With Token
spectatorClient.login(process.env['SPEC_TOKEN']);

// Spectator Seek
spectatorClient.once('ready', ()=>{
  console.log('Spectator is Watching')
})
// Infinity Loop
let check = () => {
  let isAlive = spectatorClient.guilds.cache.get('864792830673027102').members.cache.get('732554753342570516').presence
  if(isAlive){
    console.log('bot is active')
      return;
  }else if(!isAlive){
      runBot();
  }
} 
setInterval(() => {
  check()
}, 20_000);

// Bot launching
function runBot() {

// Express web
const express = require('express');
const app:any = express();
const port = process.env.PORT || 3000;
app.get('/', (req:any, res:any) => res.send('Brawlhalla bangladesh official bot is Online'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Creating bot
const client:any = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers,  GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// Login With Token
client.login(process.env['TOKEN']);

// Vc Record Map 
client.jointocreatemap = new Map();

// handlers
client.commands = new Collection();
client.events = new Collection();
client.slashcmd = new Collection();

// Run handler Files
['command_handler', 'event_handler', 'crash_handler' , 'slashcmd_handler'].forEach(handler =>{
  
  let handlr = require(`./handlers/${handler}`)
  handlr.default(client)
})
}
