
const jointocreatemap = new Map();

module.exports = async(client, oldState, newState) => {

    
// Static Id's   
const jtc_category = '942055598462222381';// join to create

const crt_custom_lobby = '942055598462222383';
const crt_2s_lobby =     '942055598713888818';
const crt_1s_lobby =     '942055598713888821';

var isJtc = crt_custom_lobby || crt_2s_lobby || crt_1s_lobby;


// If Joins Vc
if (oldState.channel !== newState.channel && newState.channel !== null && newState == isJtc) {
    if(newState.channel.id == crt_custom_lobby){ createCustomVc(newState);}
    else if(newState.channel.id == crt_2s_lobby){    create2sVc(newState);}
    else if(newState.channel.id == crt_1s_lobby){    create1sVc(newState);}
  }


// If Leaves Vc
  if (oldState.channel !== newState.channel && newState.channel === null) {
  if (jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`)) {
    var vc = oldState.guild.channels.cache.get(jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`));
    if (vc.members.size < 1) { 
      jointocreatemap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`); 
      console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room deleted")
      return vc.delete(); 
  }
    else {
    }
  }
}


// Moved vc >> changed vc
if (oldState.channel && newState.channel) {
  
    if (oldState.channel !== newState.channel) {
      if(newState.channel.id===isJtc) 
      jointocreatechannel(oldState);  
      if (jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`)) {
        var vc = oldState.guild.channels.cache.get(jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`));        if (vc.members.size < 1) { 
          jointocreatemap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`); 
          console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room Deleted")
          return vc.delete(); 
      }
      else {
      }
      }
    }
}


// VC CREATE FUNTIONS
async function createCustomVc(user){

        console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created a Room")

        await user.guild.channels.create(`Custom Lobby`, {  type: "GUILD_VOICE",  parent: jtc_category,})
        .then(async vc => {
          user.setChannel(vc);
          jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);

           vc.userLimit = '8';
          await vc.permissionOverwrites.set([
            {   id: user.id, allow: ['MANAGE_CHANNELS'], },
            {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
          ]);

        })
        .catch(err => console.log(err))

}
async function create2sVc(user){
  console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created 2v2 lobby")

  await user.guild.channels.create(`2v2 Lobby`, {  type: "GUILD_VOICE",  parent: jtc_category,})
  .then(async vc => {
    user.setChannel(vc);
    jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);

    vc.userLimit = '4';
    await vc.permissionOverwrites.set([
      {   id: user.id, allow: ['MANAGE_CHANNELS'], },
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
    ]);

  })
  .catch(err => console.log(err))
}
async function create1sVc(user){
  console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created 1v1 lobby")

  await user.guild.channels.create(`1v1 Lobby`, {  type: "GUILD_VOICE",  parent: jtc_category,})
  .then(async vc => {
    user.setChannel(vc);
    jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);

    vc.userLimit = '2';
    await vc.permissionOverwrites.set([
      {   id: user.id, allow: ['MANAGE_CHANNELS'], },
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
    ]);

  })
  .catch(err => console.log(err))
}
}