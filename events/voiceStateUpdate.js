
module.exports = async(client, oldState, newState) => {

  const { Category, VcOne, VcTwo, VcThree } = require('../config.json')
  
  // Static Channel Id's   
  const crt_custom_lobby = VcOne;
  const crt_2s_lobby = VcTwo;
  const crt_1s_lobby = VcThree;
  
  
  // If Joins Vc
  if (oldState.channel !== newState.channel && newState.channel !== null) {
      if(newState.channel.id == crt_custom_lobby){ CreateVc(newState, 'Custom Lobby', '8');}
      else if(newState.channel.id == crt_2s_lobby){CreateVc(newState, '2v2 Lobby', '4');}
      else if(newState.channel.id == crt_1s_lobby){CreateVc(newState, '1v1 Lobby', '2');}
    }
  
  // If Leaves Vc
    if (oldState.channel !== newState.channel && newState.channel === null) {
    if (client.jointocreatemap.get(`tempvoicechannel_${oldState.channel.id}`)) {
      var vc = client.channels.cache.get(client.jointocreatemap.get(`tempvoicechannel_${oldState.channel.id}`));
      if (vc.members.size < 1) { 
        client.jointocreatemap.delete(`tempvoicechannel_${oldState.channel.id}`); 
        console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room deleted")
        return vc.delete()
        .catch(err => console.log(err)); 
    }
    }
  }
  
  // Moved vc >> changed vc
  if (oldState.channel && newState.channel) {
      if (oldState.channel !== newState.channel) {
        if (client.jointocreatemap.get(`tempvoicechannel_${oldState.channel.id}`)) 
        {   var vc = client.channels.cache.get(client.jointocreatemap.get(`tempvoicechannel_${oldState.channel.id}`));
                if (vc.members.size < 1)
                 { client.jointocreatemap.delete(`tempvoicechannel_${oldState.channel.id}`); 
            console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room Deleted")
            return vc.delete()
            .catch(err => console.log(err)); 
        }
        }
      }
  }
  
  // VC CREATE FUNCTION
  async function CreateVc(user, name, userlimit,){
  
    console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created " + name)
  await user.guild.channels.create(name, {  type: "GUILD_VOICE",  parent: Category,})
    .then(async vc => {
      client.jointocreatemap.set(`tempvoicechannel_${vc.id}`, vc.id);
      try {await user.setChannel(vc);}
      catch (error) {setTimeout(() => {checkVc(vc)}, 1000 * 10);}
  
        vc.userLimit = userlimit;
        vc.rtcRegion = "singapore";
        vc.rtc_region = "singapore";
      await vc.permissionOverwrites.set([
        {   id: user.guild.id, allow: ['VIEW_CHANNEL', 'CONNECT'], }]);
    }).catch(err => console.log(err));
  }
  
  
  // Checking if anyone is in that vc
  function checkVc(vc){
    try {
      let channel = client.channels.cache.get(vc.id);
  if(!channel) return;
  if (vc.members.size < 1) { 
    client.jointocreatemap.delete(`tempvoicechannel_${vc.id}`); 
    console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room deleted")
    return vc.delete();
  }} catch (error) {console.log(error);}
  }
}