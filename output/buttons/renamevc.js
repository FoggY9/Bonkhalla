"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
exports.name = 'renamevc';
const run = (client, interaction) => {
    // if donot have ownership
    if (client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id)
        return interaction.reply({ content: 'you dont have the ownership', ephemeral: true });
    interaction.member.voice.channel.setName('');
    interaction.reply({
        content: "yamete kudasai",
        ephemeral: true
    });
};
exports.run = run;
