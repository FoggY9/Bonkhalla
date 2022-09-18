import { EmbedBuilder } from "discord.js";
type str = string
export const info = {
  name: "clandetail",
  aliases: ['claninfo'],
  description: "get clan detail",}
  export function execute(client:any, message:any, args:string[]) {

    // Errors
    if(!args.length){
      return message.channel.send({content: "Provide The Clan Prefix\n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix"})
    }
class Clan{
  name:str
  clanid:str
  logo:str
  level:str
  link:str
  title:str

  constructor(nam:str,id:str,lo:str,le:str,li:str,ti:str) {
      this.name = nam;
      this.clanid = id;
      this.logo = lo;
      this.level = le;
      this.link = li;
      this.title = ti;
  }
}
// Clan Info's as Objects
let bed = new Clan('Bedroom Community [SEA]','851302141499015208','https://cdn.discordapp.com/icons/869217076466835506/c4593d64d987054def3c427ad9de330a.webp?size=96','74','https://discord.gg/Xq67vfWmzT','Winner of BBO Clan Battle Season One!');
let per = new Clan('Persistence [SEA]','877450177991020584','','','','Winner of BBO Clan Battle Season two!');
let khu = new Clan('Khudarto [SEA]','850939055872147456','','','','');
let fiv = new Clan('Five Fingers n Extra [SEA]','799676323948920902','','','','');
let _7t1 = new Clan('7t1 Bangladesh [SEA]','772444761906348052','https://media.discordapp.net/attachments/903874086160191493/982970626694316032/5_METALIC.jpg','82','https://discord.gg/PUSNgnCVjR', '');
let azu = new Clan('Azure Spirit [SEA]','838085789841752134','https://media.discordapp.net/attachments/871427142808916048/1007612767555039262/unknown.png?width=294&height=282','100','https://discord.gg/mFB59MeuKf','Partnered Server');
let str = new Clan('Strawberry Fields [SEA]','1000623144786198548','','31+','','');
let tcu = new Clan('TCU GANG [SEA]','1007257584228646974','','','','')
let bra = new Clan('Brawler of the Dead [SEA]','1020366730184380446','','31+','','')
//let bad = new Clan(nam,id,lo,le,li,ti)


// Created Embed
let embed = new EmbedBuilder().setColor('#FFFFFF');

// Get Targeted Clan
     if(args[0] == 'bed'.toLowerCase()) var target = bed;
else if(args[0] == 'per'.toLowerCase()) var target = per;
else if(args[0] == 'khu'.toLowerCase()) var target = khu;
else if(args[0] == 'fiv'.toLowerCase()) var target = fiv;
else if(args[0] == '7t1'.toLowerCase()) var target = _7t1;
else if(args[0] == 'azu'.toLowerCase()) var target = azu;
else if(args[0] == 'str'.toLowerCase()) var target = str;
else if(args[0] == 'tcu'.toLowerCase()) var target = tcu;
else if(args[0] == 'bra'.toLowerCase()) var target = bra;
else{ return message.channel.send({content: 'cant find the clan \n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix.'})}

// Get Clan Name
embed.setTitle(target.name)
// Get all clan members
var memberList:string[] = [];
let targetRole = message.guild.roles.cache.get(target.clanid);
targetRole.members.forEach((mmbr:any) => 
  {memberList.push(mmbr.id)})

// Mark Leaders
let leaderString = '';
targetRole.members.forEach((mmbr:any) => {

if(mmbr.roles.cache.has('851722247206600704')) leaderString = leaderString + ` <@!${mmbr.id}>`;
})

  // Leaders Field
  embed.addFields({name:'• Clan Leaders', value:leaderString})
// Mark Members
let memberString = '';
memberList.forEach(element => {
  memberString = memberString + ` <@!${element}>`;
});

  // Members Field
  embed.addFields({name:`• Clan Members [${memberList.length}]`, value:memberString})

// check if logo, level, Discord Server and set it in description

if (target.level.length) {
  embed.addFields({name:`Clan level`,value: target.level, inline:true})
}
if (target.link.length) {
  embed.addFields({name:`Discord Server`, value:target.link, inline:true})
}
if (target.title.length) {
  embed.addFields({name:`Titles`, value:target.title, inline:false})
}
if (target.logo.length) {
  embed.setThumbnail(target.logo)
}



// Send Result
message.channel.send({embeds: [embed]})
  }