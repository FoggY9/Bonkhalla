// Necessary things
const {Client, Intents} = require('discord.js');
require('dotenv').config();

// Creating bot
const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS,  Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,], allowedMentions: { parse: ['users', 'roles'], repliedUser: true }});

// When ready
client.once('ready', () => {
	console.log('BBO bot is Online!');

// Presence
client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"})
});

// Login
client.login(process.env['TOKEN']);



// Event handlers