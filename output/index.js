"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Necessary things
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Express web
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Brawlhalla bangladesh official bot is Online'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// Creating bot
const client = new discord_js_1.Client({ intents: [
        discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMembers, discord_js_1.GatewayIntentBits.GuildVoiceStates,
        discord_js_1.GatewayIntentBits.GuildPresences, discord_js_1.GatewayIntentBits.DirectMessages, discord_js_1.GatewayIntentBits.GuildMessages, discord_js_1.GatewayIntentBits.MessageContent
    ], allowedMentions: { parse: ['users', 'roles'], repliedUser: true } });
// Login With Token
client.login(process.env['TOKEN']);
// Vc Record Map 
client.jointocreatemap = new Map();
// handlers
client.commands = new discord_js_1.Collection();
client.events = new discord_js_1.Collection();
client.slashcmd = new discord_js_1.Collection();
// Run handler Files
['command_handler', 'event_handler', 'crash_handler', 'slashcmd_handler'].forEach(handler => {
    let handlr = require(`./handlers/${handler}`);
    handlr.default(client);
});

const keepAlive = () => {
    server.listen(6969,() => console.log( "The server is ready aswell." ));
}
