import { joinVoiceChannel } from '@discordjs/voice';

export default async(client:any) => {
    // When Ready
    console.log('BBO bot is Online!');
    
    client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"});
   
    joinvc();

async function joinvc(){
let channel = client.channels.cache.get('751266537645801663')
var guild = client.guilds.cache.get('747565321745072359')
        joinVoiceChannel({
        channelId: channel.id,
        guildId: guild.id,
        adapterCreator: guild.voiceAdapterCreator
    })
    }

    // CHECK if any temp vc is active
function checkvcs() {
    client.guilds.cache.get('747565321745072359').channels.cache.forEach((cnl:any) => {

        if (cnl.name == 'Custom Lobby' || cnl.name == '2v2 Lobby' || cnl.name == '1v1 Lobby') {
     if (cnl.members.size < 1) { 
            return cnl.delete().catch((err:string) => console.log(err)); 
       }}
     });
}
checkvcs();
setInterval(checkvcs, 10000);


require(`../handlers/slash_registration`).default(client)

    }