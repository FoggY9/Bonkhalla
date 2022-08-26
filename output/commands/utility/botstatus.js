"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.info = void 0;
const discord_js_1 = require("discord.js");
exports.info = {
    name: "botstatus",
    aliases: [],
    description: "check bot info",
};
function execute(client, message, args) {
    return __awaiter(this, void 0, void 0, function* () {
        let seconds = Math.floor(message.client.uptime / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);
        let embed = new discord_js_1.EmbedBuilder()
            .setColor('#00fff7')
            .setTitle('Bot Status')
            .addFields([
            { name: '| Average Bot Ping |', value: `| ${Math.round(message.client.ws.ping)} ms |`, inline: true },
            { name: '| Uptime |', value: `| ${days}d, ${hours}h, ${minutes}m |`, inline: true },
            { name: '| Uptime |', value: `| ${days}d, ${hours}h, ${minutes}m |`, inline: true },
            { name: '| Total Commands |', value: `| ${client.commands.size} |`, inline: true }
        ])
            .setFooter({ text: 'use ^cmd to check all commands', iconURL: 'https://i.imgur.com/tZ2sJum.png' })
            .setTimestamp();
        message.channel.send({ embeds: [embed] });
    });
}
exports.execute = execute;
