const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dmstaff",
  aliases: [],
  description: "(beta) dm staff team",
  execute(client, message, args) {
    const perms = ['ADMINISTRATOR'];
    if(!message.member.permissions.has(perms)){return message.channel.send({content: 'you dont have permissions to use this command'})}

let staffs = [];
const {StaffRoleId, JmodRoleId, ModRoleId} = require('../../config.json');

message.guild.roles.cache.get(StaffRoleId).members.forEach(mmbr => {staffs.push(mmbr.id)});

message.guild.roles.cache.get(JmodRoleId).members.forEach(mmbr => {staffs.push(mmbr.id)});

message.guild.roles.cache.get(ModRoleId).members.forEach(mmbr => {staffs.push(mmbr.id)});//added memberid's to an array

let allstaffs = [...new Set(staffs)]; //removing duplicates

for(let i = 0; i < allstaffs.length; i++){
try{
let mmber = client.users.fetch(allstaffs[i]); //getting the member
mmber.send({content: args.slice(0).join(" ")})// sending him dm
.then(message.channel.send({content: `🟢${allstaffs[i]}`}))// if success, send meesage on this channel

}catch(err){message.channel.send({content: `⭕${allstaffs[i]}`})} // if failed, send meesage on this channel

}
  }}