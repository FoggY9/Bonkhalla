import { EmbedBuilder } from "discord.js";

export const info = {
  name: "fiv_add",
  aliases: ['addfiv', 'givefiv'],
  description: "adds fiv role to a member",}
  export async function execute(client:any, message:any) {
 

const clanName = 'five finger'
const {LeaderRoleId} = require('../../config.json');
const roleid = '799676323948920902';

let accessDn = new EmbedBuilder().setColor('#FF0000').setDescription(`❌ **|** ${message.author} You can't give roles to members, you dont have permission \nrequired-role: **Clan Leader**`)
let plsMntn = new EmbedBuilder().setColor('#FF0000').setDescription(`⭕ **|** ${message.author} please mention someone`)


if(!message.member.roles.cache.has(LeaderRoleId)) return message.channel.send({embeds: [accessDn]})


if(message.mentions.members.size == 0) return message.channel.send({embeds: [plsMntn]})

    message.mentions.members.forEach((membr:any) => {
let alrdyhas = new EmbedBuilder().setColor('#FFFF00').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** already has this clan role`)
let done = new EmbedBuilder().setColor('#00FF00').setDescription(`🟢 **|** **${membr.user.username + '#' + membr.user.discriminator}** has added **${clanName}** Clan Role`).setTimestamp()
.setFooter({ text: `action by ${message.author.username}#${message.author.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })

        if(membr.roles.cache.has(roleid)){message.channel.send({embeds: [alrdyhas]})}
        else if(!membr.roles.cache.has(roleid)){

        membr.roles.add(message.guild.roles.cache.get(roleid)).then(
          message.channel.send({embeds: [done]})
        );
        }

    })
  }