"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (client) => {
    const event_files = (0, fs_1.readdirSync)(`./output/events`).filter(file => file.endsWith('.js'));
    for (const file of event_files) {
        const events = require(`../events/${file}`);
        const event_name = file.split('.')[0];
        client.on(event_name, events.default.bind(null, client));
    }
};
