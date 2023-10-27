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
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'leaveclan';
const run = (client, interaction, options) => __awaiter(void 0, void 0, void 0, function* () {
    // All Clanrole Id's
    let clanrole = ['838085789841752134', '877450177991020584', '850939055872147456', '799676323948920902', '851302141499015208', '772444761906348052', '1000623144786198548', '1004325446797762611', '1101598854719209624'];
    let roles = yield interaction.member.roles;
    // checking if target has a clanrole
    for (let i = 0; i < clanrole.length; i++) {
        if (roles.cache.has(clanrole[i])) {
            let roleName = roles.cache.find((r) => r.id === clanrole[i]).name;
            roles.remove(interaction.guild.roles.cache.get(clanrole[i]));
            let done = new discord_js_1.EmbedBuilder().setColor('#0000FF').setDescription(`🔵 **|** **${interaction.member.user.username + '#' + interaction.member.user.discriminator}** has removed **${roleName}** Clan Role`).setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' }).setTimestamp();
            interaction.channel.send({ embeds: [done] });
        }
    }
    interaction.reply({ content: `${interaction.member}, clan roles are cleared`, ephemeral: true });
});
exports.run = run;
