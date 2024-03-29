import { EmbedBuilder } from "discord.js";
type str = string;

export const name = 'claninfo';
export const run = (client:any, interaction:any, options:any) => {

  // Making clan class constructor
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
  let bed = new Clan('Bedroom Community [SEA]','851302141499015208','https://cdn.discordapp.com/icons/869217076466835506/c4593d64d987054def3c427ad9de330a.webp?size=96','74','https://discord.gg/Xq67vfWmzT','Winner of BBO Clan Battle S1');
  let per = new Clan('Persistence [SEA]','877450177991020584','','','','Winner of BBO Clan Battle S2');
  let khu = new Clan('Khudarto [SEA]','850939055872147456','','','','');
  let fiv = new Clan('Five Fingers n Extra [SEA]','799676323948920902','','','','');
  let _7t1 = new Clan('7t1 Bangladesh [SEA]','772444761906348052','https://media.discordapp.net/attachments/903874086160191493/982970626694316032/5_METALIC.jpg','90','https://discord.gg/PUSNgnCVjR', '');
  let azu = new Clan('Azure Spirit [SEA]','838085789841752134','https://media.discordapp.net/attachments/871427142808916048/1007612767555039262/unknown.png?width=294&height=282','100','https://discord.gg/mFB59MeuKf','Partnered Server & Winner of BBO Clan Battle S3');
  let str = new Clan('Strawberry Fields [SEA]','1000623144786198548','','31+','','');
  let tcu = new Clan('TCU GANG [SEA]','1007257584228646974','','','','')
  let xun = new Clan('XUnbeatablesX [SEA]','1101598854719209624','https://cdn.discordapp.com/attachments/981636343677481000/1101798224706158662/Untitled-1.jpg','56+','https://discord.gg/a5DzpUBBxb','')
  
  
  // Created Embed
  let embed = new EmbedBuilder().setColor('#FFFFFF');

  let targetClan = options._hoistedOptions[0].value;
  // Get Targeted Clan
  let target;
       if(targetClan == 'bed') target = bed;
  else if(targetClan == 'per') target = per;
  else if(targetClan == 'khu') target = khu;
  else if(targetClan == 'fiv') target = fiv;
  else if(targetClan == '7t1') target = _7t1;
  else if(targetClan == 'azu') target = azu;
  else if(targetClan == 'str') target = str;
  else if(targetClan == 'tcu') target = tcu;
  else if(targetClan == 'xun') target = xun;
  else{ return interaction.reply({content: 'error', ephemeral: true})}
  
  // Get Clan Name
  embed.setTitle(target.name)
  // Get all clan members
  let memberList:string[] = [];
  let targetRole = interaction.guild.roles.cache.get(target.clanid);
  targetRole.members.forEach((mmbr:any) => 
    {memberList.push(mmbr.id)})
  
  // Mark Leaders
  let leaderString = ' ';
  targetRole.members.forEach((mmbr:any) => {
  
  if(mmbr.roles.cache.has('851722247206600704')){ leaderString = leaderString + ` <@!${mmbr.id}>`}
  })

    // Leaders Field
    if (leaderString) {
      
      embed.addFields({name:'• Clan Leaders', value:leaderString})
    }
  // Mark Members
  let memberString = ' ';
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
