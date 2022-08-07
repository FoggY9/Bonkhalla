const { EmbedBuilder } = require("discord.js");

export const info = {
  name: "removerolekhu",
  aliases: ['removekhu'],
  description: "removes khu role of a member",}
  export async function execute(client:any, message:any) {
 

const clanName = 'khudarto'
const {LeaderRoleId} = require('../../config.json');
const roleid = '850939055872147456';

let accessDn = new EmbedBuilder().setColor('#FF0000').setDescription(`❌ **|** ${message.author} You can't remove roles of members, you dont have permission \nrequired-role: **Clan Leader**`)
let plsMntn = new EmbedBuilder().setColor('#FF0000').setDescription(`⭕ **|** ${message.author} please mention someone`)


if(!message.member.roles.cache.has(LeaderRoleId)){
    return message.channel.send({embeds: [accessDn]})
}

if(message.mentions.members.size == 0) return message.channel.send({embeds: [plsMntn]})

    message.mentions.members.forEach((membr:any) => {
let alrdyhas = new EmbedBuilder().setColor('#808080').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** doesn't has this clan role`)
let done = new EmbedBuilder().setColor('#0000FF').setDescription(`🔵 **|** **${membr.user.username + '#' + membr.user.discriminator}** has removed **${clanName}** Clan Role`).setTimestamp()
.setFooter({ text: `action by ${message.author.username}#${message.author.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })
        if(!membr.roles.cache.has(roleid)){message.channel.send({embeds: [alrdyhas]})}
        else if(membr.roles.cache.has(roleid)){

        membr.roles.remove(message.guild.roles.cache.get(roleid)).then(
          message.channel.send({embeds: [done]})
        );
        }

    })
  }