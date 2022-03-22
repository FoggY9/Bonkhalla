const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = async(client) => {
    // When Ready
    console.log('BBO bot is Online!');
    
    client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"});
    
    joinvc();

async function joinvc(){
let channel = client.channels.cache.get('891664279428816957')
let guild = client.guilds.cache.get('864792830673027102')
        await joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        })
    }

    }