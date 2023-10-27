"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'hidevc';
const run = (client, interaction) => {
    // if donot have ownership
    if (client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id)
        return interaction.reply({ content: 'you dont have the ownership', ephemeral: true });
    //change everyone permission
    interaction.member.voice.channel.permissionOverwrites.set([
        {
            id: interaction.guild.roles.everyone.id,
            deny: [discord_js_1.PermissionsBitField.Flags.ViewChannel]
        }
    ]).then(() => {
        interaction.reply({
            content: "Your channel is hidden",
            ephemeral: true
        });
    });
    //remove view
};
exports.run = run;
