"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'help';
const run = (client, interaction) => {
    let embed = new discord_js_1.EmbedBuilder()
        .setColor('#00FFFF')
        .setTitle('All Commands')
        .addFields([
        { name: '• Give clan role', value: `/add` },
        { name: '• Remove clan role', value: `/remove` },
        { name: '• Leave clan (clear clan roles)', value: '/leaveclan' },
        { name: '• ADMIN Commands', value: '/send, /dmstaffs' }
    ])
        .setFooter({ text: 'Brawlhalla Bangladesh', iconURL: 'https://i.imgur.com/tZ2sJum.png' });
    interaction.reply({
        embeds: [embed],
        ephemeral: false
    });
};
exports.run = run;
