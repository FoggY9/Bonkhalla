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
    name: "bad_add",
    aliases: ['addbad', 'givebad'],
    description: "adds bad_2v2_players role to a member",
};
function execute(client, message) {
    return __awaiter(this, void 0, void 0, function* () {
        const clanName = 'bad 2v2 players';
        const { LeaderRoleId } = require('../../config.json');
        const roleid = '1004325446797762611';
        let accessDn = new discord_js_1.EmbedBuilder().setColor('#FF0000').setDescription(`❌ **|** ${message.author} You can't give roles to members, you dont have permission \nrequired-role: **Clan Leader**`);
        let plsMntn = new discord_js_1.EmbedBuilder().setColor('#FF0000').setDescription(`⭕ **|** ${message.author} please mention someone`);
        if (!message.member.roles.cache.has(LeaderRoleId))
            return message.reply({ embeds: [accessDn] });
        if (message.mentions.members.size == 0)
            return message.reply({ embeds: [plsMntn] });
        message.mentions.members.forEach((membr) => {
            let alrdyhas = new discord_js_1.EmbedBuilder().setColor('#FFFF00').setDescription(`🟡 **|** **${membr.user.username + '#' + membr.user.discriminator}** already has this clan role`);
            let done = new discord_js_1.EmbedBuilder().setColor('#00FF00').setDescription(`🟢 **|** **${membr.user.username + '#' + membr.user.discriminator}** has added **${clanName}** Clan Role`).setTimestamp()
                .setFooter({ text: `action by ${message.author.username}#${message.author.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' });
            if (membr.roles.cache.has(roleid)) {
                message.reply({ embeds: [alrdyhas] });
            }
            else if (!membr.roles.cache.has(roleid)) {
                membr.roles.add(message.guild.roles.cache.get(roleid)).then(message.reply({ embeds: [done] }));
            }
        });
    });
}
exports.execute = execute;
