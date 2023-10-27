"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'lockvc';
const run = (client, interaction) => {
    // if donot have ownership
    let tempvc = client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`);
    if (tempvc[1] !== interaction.member.id)
        return interaction.reply({ content: 'you dont have the ownership', ephemeral: true });
    //change everyone permission
    interaction.member.voice.channel.permissionOverwrites.set([
        {
            id: interaction.guild.roles.everyone.id,
            deny: [discord_js_1.PermissionsBitField.Flags.Connect]
        }
    ]).then(() => {
        interaction.reply({
            content: "Your channel is Locked",
            ephemeral: true
        });
    });
};
exports.run = run;
