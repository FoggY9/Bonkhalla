// Necessary things
const {Client, Collection, Intents} = require('discord.js');
require('dotenv').config();

// Express web monitoring
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));

// Creating bot
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,  Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// When ready
client.once('ready', () => {
	console.log('BBO bot is Online!');

// Presence Customization
client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"})
});

// Login With Token
client.login(process.env['TOKEN']);


// Event handler
client.events = new Collection();
require('./event_handler')(client)
