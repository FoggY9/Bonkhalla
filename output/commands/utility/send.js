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
exports.info = void 0;
const discord_js_1 = require("discord.js");
exports.info = {
    name: "send",
    aliases: ['dmall'],
    description: "dm all role holders",
    execute(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const perms = ['ADMINISTRATOR'];
            if (!message.member.permissions.has(perms)) {
                return message.channel.send({ content: 'you dont have permissions to use this command' });
            }
            let members = [];
            let targetRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || null; //collecting specified role
            if (targetRole == null)
                return message.channel.send({ content: 'error: cannot get role' });
            //get role mention
            if (!targetRole.members)
                return message.channel.send({ content: 'nobody has this role' });
            targetRole.members.forEach((mmbr) => { members.push(mmbr.id); }); //adding all memberId's to an array
            var content = args.slice(1).join(" "); // the content
            if (!content.length)
                return message.channel.send('ki message diben sheta to bolen \nwhat do you want to send?'); //if content is empty
            for (let i = 0; i < members.length; i++) {
                let user = client.users.cache.find((user) => user.id === members[i]);
                yield user.send({ content: content }).then(() => { scs(user.username); }).catch(() => { fld(user.username); });
            }
            let sendx = [];
            let sendy = [];
            function scs(username) {
                return __awaiter(this, void 0, void 0, function* () { sendy.push(`${username}`); });
            } //if success to dm
            function fld(username) {
                return __awaiter(this, void 0, void 0, function* () { sendx.push(`${username}`); });
            } //if failed to dm
            let textscs = sendy.join('**,** ');
            let textfld = sendx.join('**,** ');
            let embed = new discord_js_1.EmbedBuilder().setTitle('🟣 | Direct Messaging...');
            if (textscs)
                embed.addFields({ name: '🟢 | Sending successful', value: '> ' + textscs, inline: false }); //adding fields
            if (textfld)
                embed.addFields({ name: '⭕ | Sending Failed', value: '> ' + textfld, inline: false }); //adding fields
            yield message.channel.send({ embeds: [embed] }); // sending result
        });
    }
};
