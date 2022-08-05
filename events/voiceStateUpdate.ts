import { joinVoiceChannel } from '@discordjs/voice';
export default (client:any, oldState:any, newState:any) => {

  const { Category, VcOne, VcTwo, VcThree } = require('../config.json')
  
  
  // Static Channel Id's   
  const crt_custom_lobby = VcOne;
  const crt_2s_lobby = VcTwo;
  const crt_1s_lobby = VcThree;
  
  // delete vc if someone 

  
  // If Joins Vc, even if changed vc and joined
  if (oldState.channel !== newState.channel && newState.channel !== null) {
      if(newState.channel.id == crt_custom_lobby){ CreateVc(newState, 'Custom Lobby', '8');}
      else if(newState.channel.id == crt_2s_lobby){CreateVc(newState, '2v2 Lobby', '4');}
      else if(newState.channel.id == crt_1s_lobby){CreateVc(newState, '1v1 Lobby', '2');}
    }
  
  // If Leaves Vc
    if (oldState.channel !== newState.channel && newState.channel === null) {
      if(oldState.member.id == client.user.id) setTimeout(() => {joinvc();}, 2000) //if bot is dc's

      // if has vc record
      if(client.jointocreatemap.get(`tempvc_${oldState.guild.id}_${oldState.channel.id}`)) {
        let vc = oldState.guild.channels.cache.get(client.jointocreatemap.get(`tempvc_${oldState.guild.id}_${oldState.channel.id}`));
        if (vc.members.size < 1) { 
          client.jointocreatemap.delete(`tempvc_${oldState.guild.id}_${oldState.channel.id}`); 
          client.channels.cache.get('955447531716878427').send({content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted`})
          return oldState.channel.delete()
          .catch((err:any) => console.log(err)); 
      }
    }
      // if its a temp vc
    else if(oldState.channel.name == 'Custom Lobby' || oldState.channel.name == '2v2 Lobby' || oldState.channel.name == '1v1 Lobby'){
        if (oldState.channel.members.size < 1) { 
          client.channels.cache.get('955447531716878427').send({content: ` :X: ${oldState.channel.name} deleted`})
            return oldState.channel.delete().catch((err:any) => console.log(err)); 
      }}
  }
  // Moved vc >> changed vc
   if (oldState.channel && newState.channel && oldState.channel !== newState.channel) {
          // if has vc record
        if (client.jointocreatemap.get(`tempvc_${oldState.guild.id}_${oldState.channel.id}`)) {
             let vc = oldState.guild.channels.cache.get(client.jointocreatemap.get(`tempvc_${oldState.guild.id}_${oldState.channel.id}`));
                if (vc.members.size < 1)
                 { client.jointocreatemap.delete(`tempvc_${oldState.guild.id}_${oldState.channel.id}`); 
                 client.channels.cache.get('955447531716878427').send({content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted`})
            return vc.delete()
            .catch((err:any) => console.log(err)); 
        }
        }
          // if its a temp vc
        else if(oldState.channel.name == 'Custom Lobby' || oldState.channel.name == '2v2 Lobby' || oldState.channel.name == '1v1 Lobby'){
        if (oldState.channel.members.size < 1) { 
          client.channels.cache.get('955447531716878427').send({content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted`})
          return oldState.channel.delete()
          .catch((err:any) => console.log(err)); 
      }}
      
  }

// Functions

  // VC CREATE FUNCTION
  async function CreateVc(user:any, name:string, userlimit:string){
  
    client.channels.cache.get('955447531716878427').send({content: ` :: ${user.member.user.username}#${user.member.user.discriminator} :: Created  ${name}`})
  await user.guild.channels.create(name, {  type: "GUILD_VOICE",  parent: Category,})
    .then(async (vc:any) => {
      client.jointocreatemap.set(`tempvc_${vc.guild.id}_${vc.id}`, vc.id);
      try {await user.setChannel(vc);}
      catch (error) {setTimeout(() => {checkVc(vc)}, 1000 * 5);}
  
        vc.userLimit = userlimit;
        vc.rtcRegion = "singapore";
        vc.rtc_region = "singapore";
      await vc.permissionOverwrites.set([
        {   id: user.guild.id, allow: ['VIEW_CHANNEL', 'CONNECT'], }]);
    }).catch((err:string) => console.log(err));
  }
  
  
  // Checking Function if anyone is in that vc
  function checkVc(vc:any){
    try {
      let channel = client.channels.cache.get(vc.id);
  if(!channel) return;
  if (vc.members.size < 1) { 
    client.jointocreatemap.delete(`tempvc_${vc.guild.id}_${vc.id}`); 
    client.channels.cache.get('955447531716878427').send({content: ` :: ${oldState.member.user.username}#${oldState.member.user.discriminator} :: Room deleted` })
    return vc.delete();
  }} catch (error) {console.log(error);}
  }
  function joinvc() {

    let channel = client.channels.cache.get('751867649843265616')
    let guild = client.guilds.cache.get('747565321745072359')
             joinVoiceChannel({
                channelId: channel.id,
                guildId: guild.id,
                adapterCreator: guild.voiceAdapterCreator

            })
}  }
