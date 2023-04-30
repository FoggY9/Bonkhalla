import { joinVoiceChannel } from '@discordjs/voice';
import { ActivityType } from 'discord.js';

export default async(client:any) => {
    
    // When Ready
    console.log('BonkHalla is Online!');
    
    client.user.setPresence({
        activities: [{ name: `Brawlhalla`, type: ActivityType.Streaming,
        url: "https://www.twitch.tv/brawlhalla_bangladesh" }] });
  
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
       }else if(cnl.members.size > 0){
        client.jointocreatemap.set(`tempvc_${cnl.id}`, [cnl.id, cnl.members.entries().next().value[0]])
       }
    
    }
     });
}
checkvcs();


require(`../handlers/slash_registration`).default(client)

    }