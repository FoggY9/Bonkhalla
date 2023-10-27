"use strict";
// an Admin only command
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
exports.name = 'say';
const run = (client, interaction, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (interaction.member.id == '732554753342570516' || interaction.member.id == '646660718858600448') {
        const content = options._hoistedOptions[0].value;
        yield interaction.channel.send({ content: content });
        yield interaction.reply({
            content: 'Message Sent',
            ephemeral: true
        });
    }
    else {
        interaction.reply({ content: 'you cant use me', ephemeral: true });
    }
});
exports.run = run;
