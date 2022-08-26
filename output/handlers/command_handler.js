"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (client) => {
    const load_dir = (dirs) => {
        const command_files = (0, fs_1.readdirSync)(`./output/commands/${dirs}`).filter(file => file.endsWith('.js'));
        for (const file of command_files) {
            const command = require(`../commands/${dirs}/${file}`);
            if (command.info.name) {
                client.commands.set(command.info.name, command);
            }
            else {
                continue;
            }
        }
    };
    ['assignClanRole', 'removeClanRole', 'utility'].forEach(e => load_dir(e));
};
