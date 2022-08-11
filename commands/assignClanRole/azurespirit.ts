import { EmbedBuilder } from "discord.js";

export const info = {
  name: "azu_add",
  aliases: ['addazu', 'giveazu'],
  description: "adds azure role to a member",}
  export async function execute(client:any, message:any) {

const clanName = 'Azure Spirit'
const {LeaderRoleId} = require('../../config.json');
const roleid = '838085789841752134';

let accessDn = new EmbedBuilder().setColor('#FF0000').setDescription(`❌ **|** ${message.author} You can't give roles to members, you dont have permission \nrequired-role: **Clan Leader**`)
let plsMntn = new EmbedBuilder().setColor('#FF0000').setDescription(`⭕ **|** ${message.author} please mention someone`)


if(!message.member.roles.cache.has(LeaderRoleId)) return message.reply({embeds: [accessDn]})


if(message.mentions.members.size == 0) return message.reply({embeds: [plsMntn]})

    message.mentions.members.forEach((membr:any) => {
let alrdyhas = new EmbedBuilder().setColor('#FFFF00').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** already has this clan role`)
let done = new EmbedBuilder().setColor('#00FF00').setDescription(`🟢 **|** **${membr.user.username + '#' + membr.user.discriminator}** has added **${clanName}** Clan Role`).setTimestamp()
.setFooter({ text: `action by ${message.author.username}#${message.author.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })

        if(membr.roles.cache.has(roleid)){message.reply({embeds: [alrdyhas]})}
        else if(!membr.roles.cache.has(roleid)){

        membr.roles.add(message.guild.roles.cache.get(roleid)).then(
          message.reply({embeds: [done]})
        );
        }

    })
  }