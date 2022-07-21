const { joinVoiceChannel } = require('@discordjs/voice');
module.exports = async(client) => {
    // When Ready
    console.log('BBO bot is Online!');
    
    client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"});
    
    joinvc();

async function joinvc(){
let channel = client.channels.cache.get('751266537645801663')
var guild = client.guilds.cache.get('747565321745072359')
        await joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        })
    }

    // CHECK if any temp vc is active

    guild.channels.cache.forEach(cnl => {

       if (cnl.name == 'Custom Lobby' || cnl.name == '2v2 Lobby' || cnl.name == '1v1 Lobby') {
    if (cnl.members.size < 1) { 
           return vc.delete().catch(err => console.log(err)); 
      }}
    });
 
    }
