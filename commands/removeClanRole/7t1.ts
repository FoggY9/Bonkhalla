import { EmbedBuilder } from "discord.js";

export const info = {
  name: "removerole7t1",
  aliases: ['remove7t1'],
  description: "removes 7t1 role of a member",}
export async function execute(client:any, message:any) {
 

const clanName = '7t1 Bangladesh'
const {LeaderRoleId} = require('../../config.json');
const roleid = '772444761906348052';

let accessDn = new EmbedBuilder().setColor('#FF0000').setDescription(`❌ **|** ${message.author} You can't remove roles of members, you dont have permission \nrequired-role: **Clan Leader**`)
let plsMntn = new EmbedBuilder().setColor('#FF0000').setDescription(`⭕ **|** ${message.author} please mention someone`)


if(!message.member.roles.cache.has(LeaderRoleId)){
    return message.reply({embeds: [accessDn]})
}

if(message.mentions.members.size == 0) return message.reply({embeds: [plsMntn]})

    message.mentions.members.forEach((membr:any) => {
let alrdyhas = new EmbedBuilder().setColor('#808080').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** doesn't has this clan role`)
let done = new EmbedBuilder().setColor('#0000FF').setDescription(`🔵 **|** **${membr.user.username + '#' + membr.user.discriminator}** has removed **${clanName}** Clan Role`).setTimestamp()
.setFooter({ text: `action by ${message.author.username}#${message.author.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })
        if(!membr.roles.cache.has(roleid)){message.reply({embeds: [alrdyhas]})}
        else if(membr.roles.cache.has(roleid)){

        membr.roles.remove(message.guild.roles.cache.get(roleid)).then(
          message.reply({embeds: [done]})
        );
        }

    })
  }