const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "dmstaff",
  aliases: ['dmstaffs'],
  description: " dm staff team",
async execute(client, message, args) {
    const perms = ['ADMINISTRATOR'];
    if(!message.member.permissions.has(perms)){return message.channel.send({content: 'you dont have permissions to use this command'})}
    else if(!args.length) return message.channel.send('ki message diben sheta to bolen \nwhat do you want to send?');

let staffs = [];
const {Staff, Jmod, Mod} = require('../../config.json');

if(message.guild.roles.cache.get(Staff)){message.guild.roles.cache.get(Staff).members.forEach(mmbr => {staffs.push(mmbr.id)})}

if(message.guild.roles.cache.get(Jmod)){message.guild.roles.cache.get(Jmod).members.forEach(mmbr => {staffs.push(mmbr.id)})}

if(message.guild.roles.cache.get(Mod)){message.guild.roles.cache.get(Mod).members.forEach(mmbr => {staffs.push(mmbr.id)})}

//added memberid's to an array

let allstaffs = [...new Set(staffs)]; //removing duplicates
var content = args.slice(0).join(" ");


let sendx = [];
let sendy = [];

for(let i = 0; i < allstaffs.length; i++){
    let user = client.users.cache.find(user => user.id === allstaffs[i])
    
      if(!user.bot){
    await user.send({content: content}).then(() => {scs(user.username)}).catch(() => { lll(user.username);})
         }
    }
   async function scs(username){  sendy.push(`${username}`)}
   async function lll(username){  sendx.push(username)}

  let textscs = sendy.join('**,** ')
  let textfld = sendx.join('**,** ')
 let embed = new MessageEmbed().setTitle('🟣 | Direct Messaging...')
 if(textscs)embed.addField('🟢 | Sending successful', '> ' + textscs, false)
 if(textfld)embed.addField('⭕ | Sending Failed', '> ' + textfld, false)

message.channel.send({embeds: [embed]});
  }}