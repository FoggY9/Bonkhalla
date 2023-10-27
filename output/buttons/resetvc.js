"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'resetvc';
const run = (client, interaction) => {
    // if donot have ownership
    if (client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id)
        return interaction.reply({ content: 'you dont have the ownership', ephemeral: true });
    interaction.member.voice.channel.permissionOverwrites.set([
        {
            id: interaction.guild.roles.everyone.id,
            allow: [discord_js_1.PermissionFlagsBits.Connect, discord_js_1.PermissionFlagsBits.ViewChannel]
        }
    ]);
    interaction.reply({
        content: "yamete kudasai",
        ephemeral: true
    });
};
exports.run = run;
