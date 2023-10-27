"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const voice_1 = require("@discordjs/voice");
const discord_js_1 = require("discord.js");
exports.default = (client, oldState, newState) => {
    const { Category, VcOne, VcTwo, VcThree } = require('../config.json');
    // Static Channel Id's   
    const crt_custom_lobby = VcOne;
    const crt_2s_lobby = VcTwo;
    const crt_1s_lobby = VcThree;
    const crt_room_tournament = '1163713072146432030';
    // delete vc if someone 
    // If Joins Vc, even if changed vc and joined
    if (oldState.channel !== newState.channel && newState.channel !== null) {
        if (newState.channel.id == crt_custom_lobby) {
            CreateVc(newState, 'Custom Lobby', '8');
        }
        else if (newState.channel.id == crt_2s_lobby) {
            CreateVc(newState, '2v2 Lobby', '4');
        }
        else if (newState.channel.id == crt_1s_lobby) {
            CreateVc(newState, '1v1 Lobby', '2');
        }
        /* temp */ else if (newState.channel.id == crt_room_tournament) {
            CreateTourneyVc(newState, 'Tournament 1v1', '2');
        }
    }
    // If Leaves Vc
    if (oldState.channel !== newState.channel && newState.channel === null) {
        if (oldState.member.id == client.user.id) {
            joinvc();
        } //if bot is dc's
        // if has vc record
        if (client.jointocreatemap.get(`tempvc_${oldState.channel.id}`)) {
            let vc = oldState.guild.channels.cache.get(client.jointocreatemap.get(`tempvc_${oldState.channel.id}`)[0]);
            if (vc.members.size < 1) {
                client.jointocreatemap.delete(`tempvc_${oldState.guild.id}_${oldState.channel.id}`);
                client.channels.cache.get('955447531716878427').send({ content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted` });
                return oldState.channel.delete()
                    .catch((err) => console.log(err));
            }
            else {
                if (client.jointocreatemap.get(`tempvc_${oldState.channel.id}`)[1] == oldState.member.id) {
                    client.jointocreatemap.set(`tempvc_${oldState.channel.id}`, [oldState.channel.id, oldState.channel.members.entries().next().value[0]]);
                }
            }
        }
        // if its a temp vc
        else if (oldState.channel.name == 'Custom Lobby' || oldState.channel.name == '2v2 Lobby' || oldState.channel.name == '1v1 Lobby') {
            if (oldState.channel.members.size < 1) {
                client.channels.cache.get('955447531716878427').send({ content: ` :X: ${oldState.channel.name} deleted` });
                return oldState.channel.delete().catch((err) => console.log(err));
            }
        }
    }
    // Moved vc >> changed vc || leaving
    if (oldState.channel && newState.channel && oldState.channel !== newState.channel) {
        // if has vc record
        if (client.jointocreatemap.get(`tempvc_${oldState.channel.id}`)) {
            let vc = oldState.guild.channels.cache.get(client.jointocreatemap.get(`tempvc_${oldState.channel.id}`)[0]);
            if (vc.members.size < 1) {
                client.jointocreatemap.delete(`tempvc_${oldState.channel.id}`);
                client.channels.cache.get('955447531716878427').send({ content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted` });
                return vc.delete()
                    .catch((err) => console.log(err));
            }
            else {
                if (client.jointocreatemap.get(`tempvc_${oldState.channel.id}`)[1] == oldState.member.id) {
                    client.jointocreatemap.set(`tempvc_${oldState.channel.id}`, [oldState.channel.id, oldState.channel.members.entries().next().value[0]]);
                }
            }
        }
        // if its a temp vc
        else if (oldState.channel.name == 'Custom Lobby' || oldState.channel.name == '2v2 Lobby' || oldState.channel.name == '1v1 Lobby') {
            if (oldState.channel.members.size < 1) {
                client.channels.cache.get('955447531716878427').send({ content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted` });
                return oldState.channel.delete()
                    .catch((err) => console.log(err));
            }
        }
    }
    // Functions
    // VC CREATE FUNCTION
    function CreateVc(user, name, userlimit) {
        client.channels.cache.get('955447531716878427').send({ content: ` :: ${user.member.user.username}#${user.member.user.discriminator} :: Created  ${name}` });
        user.guild.channels.create({ name: name, type: discord_js_1.ChannelType.GuildVoice, parent: Category, userLimit: userlimit, rtcRegion: 'singapore' })
            .then((vc) => {
            client.jointocreatemap.set(`tempvc_${vc.id}`, [vc.id, user.member.id]);
            user.setChannel(vc).catch(() => checkVc(vc));
        }).catch((err) => console.log(err));
    }
    // Checking Function if anyone is in that vc
    function checkVc(vc) {
        try {
            let channel = client.channels.cache.get(vc.id);
            if (!channel)
                return;
            if (vc.members.size < 1) {
                client.jointocreatemap.delete(`tempvc_${vc.id}`);
                client.channels.cache.get('955447531716878427').send({ content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted` });
                return vc.delete();
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    function joinvc() {
        let channel = client.channels.cache.get('751867649843265616');
        let guild = client.guilds.cache.get('747565321745072359');
        (0, voice_1.joinVoiceChannel)({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        });
    }
    /* temp start*/
    function CreateTourneyVc(user, name, userlimit) {
        client.channels.cache.get('955447531716878427').send({ content: `Created tourney vc:: ${user.member.user.username}#${user.member.user.discriminator} ::` });
        user.guild.channels.create({ name: name, type: discord_js_1.ChannelType.GuildVoice, parent: '1161369942239739974', userLimit: userlimit, rtcRegion: 'singapore' })
            .then((vc) => {
            client.jointocreatemap.set(`tempvc_${vc.id}`, [vc.id, user.member.id]);
            user.setChannel(vc).catch(() => checkVc(vc));
        }).catch((err) => console.log(err));
    }
    /* end temp*/
};
