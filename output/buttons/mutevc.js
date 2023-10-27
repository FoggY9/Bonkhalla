"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'mutevc';
const run = (client, interaction) => {
    // if donot have ownership
    if (client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id)
        return interaction.reply({ content: 'you dont have the ownership', ephemeral: true });
    const row = new discord_js_1.ActionRowBuilder()
        .setComponents(new discord_js_1.UserSelectMenuBuilder()
        .setCustomId('mutevc').setMaxValues(1).setMinValues(1).setPlaceholder('Select one User'));
    interaction.reply({ content: 'select someone to mute', components: [row], ephemeral: true });
};
exports.run = run;
