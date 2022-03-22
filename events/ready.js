const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = async(client) => {
    // When Ready
    console.log('BBO bot is Online!');
    
    client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"});
    
    joinvc();

async function joinvc(){
let channel = client.channels.cache.get('751867649843265616')
let guild = client.guilds.cache.get('747565321745072359')
        await joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        })
    }

        client.on('voiceStateUpdate', (oldState, newState) => {
            if (oldState.channel !== newState.channel && newState.channel === null && oldState.channel.id == client.user.id) joinvc();
        })
    }