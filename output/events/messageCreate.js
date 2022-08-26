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
exports.default = (client, message) => __awaiter(void 0, void 0, void 0, function* () {
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let PREFIX = process.env['PREFIX'] || '^';
    if (message.author.bot)
        return;
    if (!message.guild)
        return;
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content))
        return;
    const [, matchedPrefix] = message.content.match(prefixRegex);
    const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) ||
        client.commands.find((cmd) => cmd.info.aliases && cmd.info.aliases.includes(commandName));
    if (!command)
        return;
    try {
        command.execute(client, message, args);
    }
    catch (error) {
        console.error(error);
        message.reply("Error occourred, cant run this command.").then((msg) => {
            setTimeout(() => msg.delete(), 7 * 1000);
        }).catch(console.error);
    }
});
