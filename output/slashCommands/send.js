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
exports.name = 'send';
const run = (client, interaction, options) => __awaiter(void 0, void 0, void 0, function* () {
    const perms = ['ADMINISTRATOR'];
    if (!interaction.member.permissions.has(perms)) {
        return interaction.reply({ content: 'you dont have permissions to use this command', ephemeral: true });
    }
    let members = [];
    let targetRole = interaction.guild.roles.cache.get(options._hoistedOptions[0].value); //collecting specified role
    //get role mention
    if (!targetRole.members)
        return interaction.channel.send({ content: 'nobody has this role' });
    targetRole.members.forEach((mmbr) => { members.push(mmbr.id); }); //adding all memberId's to an array
    const content = options._hoistedOptions[1].value; // the content
    for (let i = 0; i < members.length; i++) {
        let user = client.users.cache.find((user) => user.id === members[i]);
        yield user.send({ content: content }).then(() => { scs(user.username); }).catch(() => { fld(user.username); });
    }
    let sendx = [];
    let sendy = [];
    function scs(username) { sendy.push(`${username}`); } //if success to dm
    function fld(username) { sendx.push(`${username}`); } //if failed to dm
    let textscs = sendy.join('**,** ');
    let textfld = sendx.join('**,** ');
    let embed = new discord_js_1.EmbedBuilder().setTitle('🟣 | Direct Messaging...');
    if (textscs)
        embed.addFields({ name: '🟢 | Sending successful', value: '> ' + textscs, inline: false }); //adding fields
    if (textfld)
        embed.addFields({ name: '⭕ | Sending Failed', value: '> ' + textfld, inline: false }); //adding fields
    interaction.reply({ embeds: [embed], ephemeral: false });
});
exports.run = run;
