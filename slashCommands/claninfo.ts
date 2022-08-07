import { EmbedBuilder } from "discord.js";
type str = string;

export const name = 'claninfo';
export const run = (client:any, interaction:any, options:any) => {

      
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
  let azu = new Clan('Azure Spirit [SEA]','838085789841752134','lo','100','https://discord.gg/mFB59MeuKf','');
  let str = new Clan('Strawberry Fields [SEA]','1000623144786198548','','31+','','');
  //let bad = new Clan(nam,id,lo,le,li,ti)
  
  
  // Created Embed
  let embed = new EmbedBuilder().setColor('#FFFFFF');

  let targetClan = options._hoistedOptions[0].value;
  // Get Targeted Clan
       if(targetClan == 'bed') var target = bed;
  else if(targetClan == 'per') var target = per;
  else if(targetClan == 'khu') var target = khu;
  else if(targetClan == 'fiv') var target = fiv;
  else if(targetClan == '7t1') var target = _7t1;
  else if(targetClan == 'azu') var target = azu;
  else if(targetClan == 'str') var target = str;
  else{ return interaction.reply({content: 'cant find the clan \n Usage: *^claninfo <prefix>* \n first 3 letter of a clan name is its prefix.', ephemeral: false})}
  
  // Get Clan Name
  embed.setTitle(target.name)
  // Get all clan members
  var memberList:string[] = [];
  let targetRole = interaction.guild.roles.cache.get(target.clanid);
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
    embed.addFields({name: `Clan level`, value: target.level, inline:true})
  }
  if (target.link.length) {
    embed.addFields({name:`Discord Server`,value: target.link, inline:true})
  }
  if (target.logo.length) {
    embed.setThumbnail(target.logo)
  }
  if (target.title.length) {
    embed.addFields({name:`Titles`, value:target.title})
  }
  
  
  // Send Result
  interaction.reply({embeds: [embed], ephemeral: false})
}
