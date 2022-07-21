const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clandetail",
  aliases: ['claninfo'],
  description: "get clan detail",
 execute(client, message, args) {

    // Errors
    if(!args.length){
      return message.channel.send({content: "Provide The Clan Prefix\n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix"})
    }

// Clan Info's
let bed = {
  name: 'Bedroom Community',
  clanid: '851302141499015208'
}
let per = {
  name: 'Persistence',
  clanid: '877450177991020584'
}
let khu = {
  name: 'Khudarto',
  clanid: '850939055872147456'
}
let fiv = {
  name: 'Five Fingers n Extra',
  clanid: '799676323948920902'
}
let _7t1 = {
  name: '7t1 Bangladesh',
  clanid: '772444761906348052'
}
let azu = {
  name: 'Azure Spirit',
  clanid: '838085789841752134'
}


// Created Embed
let embed = new MessageEmbed().setColor('#FFFFFF');

// Get Targeted Clan
if(args[0] = 'bed'.toLowerCase()) var target = bed;
else if(args[0] = 'per'.toLowerCase()) var target = per;
else if(args[0] = 'khu'.toLowerCase()) var target = khu;
else if(args[0] = 'fiv'.toLowerCase()) var target = fiv;
else if(args[0] = '7t1'.toLowerCase()) var target = _7t1;
else if(args[0] = 'azu'.toLowerCase()) var target = azu;
else{ return message.channel.send({content: 'cant find the clan \n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix.'})}

// Get Clan Name
embed.setTitle(target.name)
// Get all clan members
var memberList = [];
let targetRole = message.guild.roles.cache.get(target.clanid);
targetRole.members.forEach(mmbr => 
  {memberList.push(mmbr.id)})

// Mark Leaders
let leaderString = '';
targetRole.members.forEach(mmbr => {

if(mmbr.roles.cache.has('851722247206600704')) leaderString = leaderString + ` <@!${mmbr.id}>`;
})

  // Leaders Field
  embed.addField('Clan Leaders', leaderString)
// Mark Members
let memberString = '';
memberList.forEach(element => {
  memberString = memberString + ` <@!${element}>`;
});

  // Members Field
  embed.addField('Clan Members', memberString)

// check if logo, level, Discord Server



// Send Result
message.channel.send({embed: [embed]})
  }}