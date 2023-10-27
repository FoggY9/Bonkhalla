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
const voice_1 = require("@discordjs/voice");
const discord_js_1 = require("discord.js");
exports.default = (client) => __awaiter(void 0, void 0, void 0, function* () {
    // When Ready
    console.log('BonkHalla is Online!');
    client.user.setPresence({
        activities: [{ name: `Brawlhalla`, type: discord_js_1.ActivityType.Streaming,
                url: "https://www.twitch.tv/brawlhalla_bangladesh" }]
    });
    joinvc();
    function joinvc() {
        return __awaiter(this, void 0, void 0, function* () {
            let channel = client.channels.cache.get('751266537645801663');
            const guild = client.guilds.cache.get('747565321745072359');
            (0, voice_1.joinVoiceChannel)({
                channelId: channel.id,
                guildId: guild.id,
                adapterCreator: guild.voiceAdapterCreator
            });
        });
    }
    // CHECK if any temp vc is active
    function checkvcs() {
        client.guilds.cache.get('747565321745072359').channels.cache.forEach((cnl) => {
            if (cnl.name == 'Custom Lobby' || cnl.name == '2v2 Lobby' || cnl.name == '1v1 Lobby') {
                if (cnl.members.size < 1) {
                    return cnl.delete().catch((err) => console.log(err));
                }
                else if (cnl.members.size > 0) {
                    client.jointocreatemap.set(`tempvc_${cnl.id}`, [cnl.id, cnl.members.entries().next().value[0]]);
                }
            }
        });
    }
    checkvcs();
    require(`../handlers/slash_registration`).default(client);
});
