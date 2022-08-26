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
    name: "leaveclan",
    aliases: ["leaveclans"],
    description: "leaves clan",
};
function execute(client, message) {
    return __awaiter(this, void 0, void 0, function* () {
        let clanrole = ['838085789841752134', '877450177991020584', '850939055872147456', '799676323948920902', '851302141499015208', '772444761906348052', '1000623144786198548', '1004325446797762611', '1007257584228646974'];
        var roles = yield message.member.roles;
        for (let i = 0; i < clanrole.length; i++) {
            if (roles.cache.has(clanrole[i])) {
                let roleName = roles.cache.find((r) => r.id === clanrole[i]).name;
                yield roles.remove(message.guild.roles.cache.get(clanrole[i]));
                let done = new discord_js_1.EmbedBuilder().setColor('#0000FF').setDescription(`🔵 **|** **${message.author.username + '#' + message.author.discriminator}** has removed **${roleName}** Clan Role`).setTimestamp();
                yield message.channel.send({ embeds: [done] });
            }
        }
        message.channel.send({ content: 'clan roles cleared' });
    });
}
exports.execute = execute;
