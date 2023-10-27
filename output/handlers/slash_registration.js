"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    let guild = client.guilds.cache.get('747565321745072359');
    let commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = client.application.commands;
    }
    commands.create({
        name: 'say',
        description: 'say something',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'content',
                description: 'give your text here',
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            }
        ],
    });
    commands.create({
        name: 'help',
        description: 'get info of this bot and its commands'
    });
    commands.create({
        name: 'add',
        description: 'give clan role',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'clan-name',
                description: 'the clan role you want to give',
                choices: [
                    { name: 'Azure Spirit', value: 'Azure Spirit' },
                    { name: '7t1 Bangladesh', value: '7t1 Bangladesh' },
                    { name: 'Bedroom Community', value: 'Bedroom Community' },
                    { name: 'Persistence', value: 'Persistence' },
                    { name: 'Five Finger N Extra', value: 'Five Finger N Extra' },
                    { name: 'Strawberry Field', value: 'Strawberry Field' },
                    { name: 'Khudarto', value: 'Khudarto' },
                    { name: 'Bad 2v2 Players', value: 'Bad 2v2 Players' },
                    { name: 'TCU GANG', value: 'TCU GANG' },
                    { name: 'XUnbeatablesX', value: 'XUnbeatablesX' }
                ],
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            },
            {
                name: 'target-member',
                description: 'the member you want to give',
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.User
            }
        ]
    });
    commands.create({
        name: 'remove',
        description: 'remove clan role',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'clan-name',
                description: 'the clan role you want to remove',
                choices: [
                    { name: 'Azure Spirit', value: 'Azure Spirit' },
                    { name: '7t1 Bangladesh', value: '7t1 Bangladesh' },
                    { name: 'Bedroom Community', value: 'Bedroom Community' },
                    { name: 'Persistence', value: 'Persistence' },
                    { name: 'Five Finger N Extra', value: 'Five Finger N Extra' },
                    { name: 'Strawberry Field', value: 'Strawberry Field' },
                    { name: 'Khudarto', value: 'Khudarto' },
                    { name: 'Bad 2v2 Players', value: 'Bad 2v2 Players' },
                    { name: 'TCU GANG', value: 'TCU GANG' },
                    { name: 'XUnbeatablesX', value: 'XUnbeatablesX' }
                ],
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            },
            {
                name: 'target-member',
                description: 'the member you want to remove',
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.User
            }
        ]
    });
    commands.create({
        name: 'leaveclan',
        description: 'remove all clan roles',
        type: discord_js_1.ApplicationCommandType.ChatInput,
    });
    commands.create({
        name: 'claninfo',
        description: 'view clan details',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'clan-name',
                description: 'the clan role you want to give',
                choices: [
                    { name: 'Azure Spirit', value: 'azu' },
                    { name: '7t1 Bangladesh', value: '7t1' },
                    { name: 'Bedroom Community', value: 'bed' },
                    { name: 'Persistence', value: 'per' },
                    { name: 'Five Finger N Extra', value: 'fiv' },
                    { name: 'Strawberry Field', value: 'str' },
                    { name: 'Khudarto', value: 'khu' },
                    { name: 'TCU GANG', value: 'tcu' },
                    { name: 'XUnbeatablesX', value: 'xun' }
                ],
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            }
        ]
    });
    commands.create({
        name: 'whois',
        description: 'know about a person',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'person-name',
                description: 'choose a nigga',
                choices: [
                    { name: 'Red Apple', value: 'red' },
                    { name: 'FoggY', value: 'fog' },
                    { name: 'Frisk', value: 'fri' },
                    { name: 'Juju', value: 'juj' },
                    { name: 'Crystal', value: 'cry' },
                ],
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            }
        ]
    });
    commands.create({
        name: 'botstatus',
        description: 'check bot status'
    });
    commands.create({
        name: 'dmstaffs',
        description: 'send dm to staffs',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'content',
                description: 'give your message here',
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            }
        ]
    });
    commands.create({
        name: 'send',
        description: 'send dm to role members',
        type: discord_js_1.ApplicationCommandType.ChatInput,
        options: [
            {
                name: 'role',
                description: 'select targeted role',
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.Role
            },
            {
                name: 'content',
                description: 'give your message here',
                required: true,
                type: discord_js_1.ApplicationCommandOptionType.String
            }
        ]
    });
});
