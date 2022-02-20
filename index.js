// Necessary things
const {Client, Collection, Intents} = require('discord.js');
require('dotenv').config();

// Express web monitoring
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Brawlhalla bangladesh official bot is Online'));
app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));

// Creating bot
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,  Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// Login With Token
client.login(process.env['TOKEN']);

// Vc Record Map 
client.jointocreatemap = new Map();

// Event handler
client.events = new Collection();
require('./event_handler')(client)
