"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dev = false;
// Necessary things to Import
const discord_js_1 = require("discord.js");
const voice_1 = require("@discordjs/voice");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require(`./handlers/crash_handler`);
let myPriority;
let spectatorBotId;
let interval;
if (dev) {
    runBot('');
}
else {
    // login to spectator account
    let spectatorClient = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMembers,
            discord_js_1.GatewayIntentBits.GuildPresences, discord_js_1.GatewayIntentBits.GuildVoiceStates], allowedMentions: { parse: ['users', 'roles'], repliedUser: true } });
    // Login With Token
    spectatorClient.login(process.env['SPEC_TOKEN']).catch(err => {process.exit()});
    // Spectator on Ready
    spectatorClient.once('ready', (c) => {
        // find my priority
        spectatorBotId = c.user.id;
        myPriority = spectatorClient.guilds.cache.get('864792830673027102').members.cache.get(spectatorBotId).nickname.split(' ')[1];
        // join vc
        let channel = spectatorClient.channels.cache.get('1095956100647497738');
        (0, voice_1.joinVoiceChannel)({
            channelId: channel.id,
            guildId: channel.guild.id,
            adapterCreator: channel.guild.voiceAdapterCreator,
        });
        console.log('Started watching Bonkhalla, Priority: ' + myPriority);
        // Checking interval
        interval = setInterval(() => {
            check();
        }, 10000);
    });
    //neverdie, try
    // require(`./handlers/crash_handler`);
    // Infinity Loop
    let check = () => {
        let isAlive;
        let presence = spectatorClient.guilds.cache.get('864792830673027102').members.cache.get('819227099340079145').presence;
        if (presence) {
            isAlive = presence.status !== 'offline';
        }
        else if (!presence) {
            isAlive = false;
        }
        if (isAlive) {
            presence.destroy();
            isAlive.destroy();
            return;
        }
        else if (!isAlive) {
            let run = () => {
                runBot(spectatorClient);
                spectatorClient.channels.cache.get('1095959354244603984').send({ content: `${process.env['HOSTNAME']} is taking over the Host` });
                console.log('bot is offline, starting bonkhalla');
                clearInterval(interval);
            };
            // check vc members
            let attendance = [];
            let vcMembers = spectatorClient.channels.cache.get('1095956100647497738').members;
            // if there is anyone else
            if (vcMembers.size > 1) {
                spectatorClient.channels.cache.get('1095956100647497738').members.forEach((element) => {
                    attendance.push(element.nickname.split(' ')[1]);
                });
                attendance.sort();
                if (attendance[0] == myPriority) {
                    run();
                }
                else {
                    spectatorClient.channels.cache.get('1095959354244603984').send({ content: `priority: ${attendance[0]} Will take over` });
                }
            }
            // if others are sleeping
            else if (vcMembers.size == 1 || vcMembers.size == 0) {
                run();
            }
        }
    };
}
// Bot launching
function runBot(spectatorClient) {
    // Creating bot
    const client = new discord_js_1.Client({ intents: [discord_js_1.GatewayIntentBits.Guilds, discord_js_1.GatewayIntentBits.GuildMembers, discord_js_1.GatewayIntentBits.GuildVoiceStates, discord_js_1.GatewayIntentBits.GuildPresences], allowedMentions: { parse: ['users', 'roles'], repliedUser: true } });
    // Login With Token
    client.login(process.env['TOKEN']).catch((err)=>{process.exit()});
    // destroy spectator
    client.on('ready', () => {
        console.log('shutting down spectator');
        dev ? null : spectatorClient.destroy();
    });
    // Vc Record Map 
    client.jointocreatemap = new Map();
    // handlers
    client.events = new discord_js_1.Collection();
    client.slashcmd = new discord_js_1.Collection();
    client.buttons = new discord_js_1.Collection();
    client.menus = new discord_js_1.Collection();
    // Run handler Files
    ['event_handler', 'slashcmd_handler', 'button_handler', 'menu_handler'].forEach(handler => {
        let handlr = require(`./handlers/${handler}`);
        handlr.default(client);
    });
}
