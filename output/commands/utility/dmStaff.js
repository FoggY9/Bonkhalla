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
    name: "dmstaff",
    aliases: ['dmstaffs'],
    description: " dm staff team",
};
function execute(client, message, args) {
    return __awaiter(this, void 0, void 0, function* () {
        const perms = ['ADMINISTRATOR'];
        if (!message.member.permissions.has(perms)) {
            return message.channel.send({ content: 'you dont have permissions to use this command' });
        }
        else if (!args.length)
            return message.channel.send('ki message diben sheta to bolen \nwhat do you want to send?');
        let staffs = [];
        const { Staff, Jmod, Mod } = require('../../config.json');
        if (message.guild.roles.cache.get(Staff)) {
            message.guild.roles.cache.get(Staff).members.forEach((mmbr) => { staffs.push(mmbr.id); });
        }
        if (message.guild.roles.cache.get(Jmod)) {
            message.guild.roles.cache.get(Jmod).members.forEach((mmbr) => { staffs.push(mmbr.id); });
        }
        if (message.guild.roles.cache.get(Mod)) {
            message.guild.roles.cache.get(Mod).members.forEach((mmbr) => { staffs.push(mmbr.id); });
        }
        //added memberid's to an array
        let allstaffs = [...new Set(staffs)]; //removing duplicates
        var content = args.slice(0).join(" ");
        let sendx = [];
        let sendy = [];
        for (let i = 0; i < allstaffs.length; i++) {
            let user = client.users.cache.find((user) => user.id === allstaffs[i]);
            if (!user.bot) {
                yield user.send({ content: content }).then(() => { scs(user.username); }).catch(() => { lll(user.username); });
            }
        }
        function scs(username) {
            return __awaiter(this, void 0, void 0, function* () { sendy.push(`${username}`); });
        }
        function lll(username) {
            return __awaiter(this, void 0, void 0, function* () { sendx.push(username); });
        }
        let textscs = sendy.join('**,** ');
        let textfld = sendx.join('**,** ');
        let embed = new discord_js_1.EmbedBuilder().setTitle('🟣 | Direct Messaging...');
        if (textscs)
            embed.addFields({ name: '🟢 | Sending successful', value: '> ' + textscs, inline: false });
        if (textfld)
            embed.addFields({ name: '⭕ | Sending Failed', value: '> ' + textfld, inline: false });
        message.channel.send({ embeds: [embed] });
    });
}
exports.execute = execute;
