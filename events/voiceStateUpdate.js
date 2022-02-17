
const jointocreatemap = new Map();

module.exports = async(client, oldState, newState) => {

const { Category, VcOne, VcTwo, VcThree } = require('../config.json')


// Static Channel Id's   

const crt_custom_lobby = VcOne;
const crt_2s_lobby = VcTwo;
const crt_1s_lobby = VcThree;


// If Joins Vc
if (oldState.channel !== newState.channel && newState.channel !== null) {
    if(newState.channel.id == crt_custom_lobby){ createCustomVc(newState);}
    else if(newState.channel.id == crt_2s_lobby){create2sVc(newState);}
    else if(newState.channel.id == crt_1s_lobby){create1sVc(newState);}
  }


// If Leaves Vc
  if (oldState.channel !== newState.channel && newState.channel === null) {
  if (jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`)) {
    var vc = oldState.guild.channels.cache.get(jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`));
    if (vc.members.size < 1) { 
      jointocreatemap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`); 
      console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room deleted")
      return vc.delete()
      .catch(err => console.log(err)); 
  }
    else {
    }
  }
}


// Moved vc >> changed vc
if (oldState.channel && newState.channel) {
    if (oldState.channel !== newState.channel) {
      if (jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`)) 
      {   var vc = oldState.guild.channels.cache.get(jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`));
              if (vc.members.size < 1)
               { jointocreatemap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channel.id}`); 
          console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room Deleted")
          return vc.delete()
          .catch(err => console.log(err)); 
      }
      else {
      }
      }
    }
}


// VC CREATE FUNTIONS
async function createCustomVc(user){

  console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created Custom Lobby")

let newvc = await user.guild.channels.create(`Custom Lobby`, {  type: "GUILD_VOICE",  parent: Category,})
  .then(async vc => {
    jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
    await user.setChannel(vc);

      vc.userLimit = '8';
      vc.rtcRegion = "singapore";
      vc.rtc_region = "singapore";
    await vc.permissionOverwrites.set([
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
      {id: '732554753342570516', allow: ['MANAGE_CHANNELS']}
    ]);
    setTimeout(() => {checkVc(vc)}, 1000 * 30);
  })
  .catch(err => console.log(err));



}
async function create2sVc(user){
  console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created 2v2 lobby")

  let newvc = await user.guild.channels.create(`2v2 Lobby`, {  type: "GUILD_VOICE",  parent: Category,})
  .then(async vc => {
    jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
   await user.setChannel(vc);

    vc.userLimit = '4';
    vc.rtcRegion = "singapore";
    vc.rtc_region = "singapore";
    await vc.permissionOverwrites.set([
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
      {id: '732554753342570516', allow: ['MANAGE_CHANNELS']}
    ]);
    setTimeout(() => {checkVc(vc)}, 1000 * 30);
  })
  .catch(err => console.log(err));

}
async function create1sVc(user){
  console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created 1v1 lobby")

  let newvc = await user.guild.channels.create(`1v1 Lobby`, {  type: "GUILD_VOICE",  parent: Category,})
  .then(async vc => {
    jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
  await  user.setChannel(vc);

    vc.userLimit = '2';
    vc.rtcRegion = "singapore";
    vc.rtc_region = "singapore";
    await vc.permissionOverwrites.set([
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
      {id: '732554753342570516', allow: ['MANAGE_CHANNELS']}
    ]);
    setTimeout(() => {checkVc(vc)}, 1000 * 30);
  })
  .catch(err => console.log(err));

}



function checkVc(vc){
let channel = client.channels.get(vc.id);
if(!channel) return;
if (vc.members.size < 1) { 
  jointocreatemap.delete(`tempvoicechannel_${vc.guild.id}_${vc.channel.id}`); 
  console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room deleted")
  return vc.delete()
  .catch(err => console.log(err)); 
}

}
}