
const jointocreatemap = new Map();

module.exports = async(client, oldState, newState) => {


// Static Id's   
const jtc_category = '751266531597353040';// join to create

const crt_custom_lobby = '751266533702893578';
const crt_2s_lobby =     '751269940887289876';
const crt_1s_lobby =     '751269309065461820';


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
      return vc.delete(); 
  }
    else {
    }
  }
}


// Moved vc >> changed vc
if (oldState.channel && newState.channel) {
    if (oldState.channel !== newState.channel) {
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

        console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created Custom Lobby")

        await user.guild.channels.create(`Custom Lobby`, {  type: "GUILD_VOICE",  parent: jtc_category,})
        .then(async vc => {
          user.setChannel(vc);
          jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);

           vc.userLimit = '8';
           vc.rtc_region = "Singapore";
          await vc.permissionOverwrites.set([
            {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
            {id: '732554753342570516', allow: ['MANAGE_CHANNEL']}
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
    vc.rtc_region = "Singapore";
    await vc.permissionOverwrites.set([
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
      {id: '732554753342570516', allow: ['MANAGE_CHANNEL']}
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
    vc.rtc_region = "Singapore";
    await vc.permissionOverwrites.set([
      {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
      {id: '732554753342570516', allow: ['MANAGE_CHANNEL']}
    ]);

  })
  .catch(err => console.log(err))
}
}