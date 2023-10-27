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
exports.run = exports.name = void 0;
const discord_js_1 = require("discord.js");
exports.name = 'vcban';
const run = (client, int, interactorId, targetId) => __awaiter(void 0, void 0, void 0, function* () {
    const interactor = yield int.guild.members.cache.find((user) => user.id === interactorId);
    // const interactor = int.guild.members.cache.get(interactorId)//const target = client.members.cache.get(targetId)
    let tempvc = client.jointocreatemap.get(`tempvc_${interactor.voice.channel.id}`);
    if (tempvc && tempvc[1] == interactorId) {
        int.guild.channels.cache.get(tempvc[0]).permissionOverwrites.set([
            {
                id: targetId,
                deny: [discord_js_1.PermissionFlagsBits.Connect]
            }
        ]).then(() => {
            int.update({
                content: 'done', components: []
            });
        });
    }
});
exports.run = run;
