const { CONNECTING } = require("ws");

const jointocreatemap = new Map();

module.exports = async(client, oldState, newState) => {

    
// Static Id's   
const jtc_category = '942055598462222381';// join to create

const crt_custom_lobby = '942055598462222383';
const crt_2s_lobby =     '942055598713888818';
const crt_1s_lobby =     '942055598713888821';

// If Joins Vc
if (oldState.channel !== newState.channel && oldState.channel === null) {
    if(newState.channel.id == crt_custom_lobby){return createCustomVc(newState);}
    else if(newState.channel.id == crt_2s_lobby){   return create2sVc(newState);}
    else if(newState.channel.id == crt_1s_lobby){   return create1sVc(newState);}
  }


// If Leaves Vc
  if (oldState.channelID && !newState.channelID) {
  if (jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`)) {
    var vc = oldState.guild.channels.cache.get(jointocreatemap.get(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`));
    if (vc.members.size < 1) { 
      jointocreatemap.delete(`tempvoicechannel_${oldState.guild.id}_${oldState.channelID}`); 
      console.log(" :: " + oldState.member.user.username + "#" + oldState.member.user.discriminator + " :: Room wurde gelöscht")
      return vc.delete(); 
  }
    else {
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

          await vc.permissionOverwrites.set([
            {   id: user.id, allow: ['MANAGE_CHANNELS'], },
            {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
          ]);

        })

}
async function create2sVc(user){
        console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created a Room")

        await user.guild.channels.create(`Custom Lobby`, {  type: 'voice',  parent: jtc_category,})
        .then(async vc => {
          user.setChannel(vc);
          jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
          
          await vc.permissionOverwrites.set([
            {   id: user.id, allow: ['MANAGE_CHANNELS'], },
            {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
          ]);
        })
}
async function create1sVc(user){
    console.log(" :: " + user.member.user.username + "#" + user.member.user.discriminator + " :: Created a Room")

    await user.guild.channels.create(`Custom Lobby`, {  type: 'voice',  parent: jtc_category,})
    .then(async vc => {
      user.setChannel(vc);
      jointocreatemap.set(`tempvoicechannel_${vc.guild.id}_${vc.id}`, vc.id);
      
      await vc.permissionOverwrites.set([
        {   id: user.id, allow: ['MANAGE_CHANNELS'], },
        {   id: user.guild.id, allow: ['VIEW_CHANNEL'], },
      ]);
    })
}
}