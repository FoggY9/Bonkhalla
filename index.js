// Necessary things
const {Client, Collection, Intents} = require('discord.js');
require('dotenv').config();

// Express web
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Brawlhalla bangladesh official bot is Online'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// Creating bot
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,  Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// Login With Token
client.login(process.env['TOKEN']);

// Vc Record Map 
client.jointocreatemap = new Map();

// handlers
client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler', 'crash_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client)
})