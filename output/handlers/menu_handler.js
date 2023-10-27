"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (client) => {
    const command_files = (0, fs_1.readdirSync)(`./output/selectmenus`).filter(file => file.endsWith('.js'));
    for (const file of command_files) {
        const menu = require(`../selectmenus/${file}`);
        if (menu.name) {
            client.menus.set(menu.name, menu);
        }
    }
};
