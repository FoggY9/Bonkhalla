"use strict";
// an Admin only command
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
exports.name = 'say';
const run = (client, interaction, options) => {
    if (interaction.member.id == '732554753342570516' || interaction.member.id == '646660718858600448') {
        const content = options._hoistedOptions[0].value;
        interaction.channel.send({ content: content }).then(interaction.reply({
            content: 'Message Sent',
            ephemeral: true
        }));
    }
    else {
        interaction.reply({ content: 'you cant use me', ephemeral: true });
    }
};
exports.run = run;
