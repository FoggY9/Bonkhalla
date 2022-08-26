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
    name: "add",
    aliases: ['add', 'give'],
    description: "adds 7t1 role to a member",
};
function execute(client, message) {
    return __awaiter(this, void 0, void 0, function* () {
        let embed = new discord_js_1.EmbedBuilder().setTitle('Usage').setColor('#FFFFFF')
            .setDescription('^add{prefix} {mentions}');
        message.channel.send({ embeds: [embed] });
    });
}
exports.execute = execute;
