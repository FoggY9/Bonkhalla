"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
exports.name = 'reqosvc';
const run = (client, interaction) => {
    // check if he is in vc
    interaction.reply({
        content: "yamete kudasai",
        ephemeral: true
    });
};
exports.run = run;
