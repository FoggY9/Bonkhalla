// Require the necessary discord.js classes
const {Client, Intents} = require('discord.js');
require('dotenv').config();



// Create a new client instance
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,  Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('BBO bot is Online!');
});

// Login to Discord with your client's token
client.login(process.env['TOKEN']);