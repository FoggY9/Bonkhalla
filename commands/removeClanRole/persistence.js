const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "removeroleper",
  aliases: ['removeper'],
  description: "removes per role of a member",
 async execute(client, message) {

const clanName = 'Persistence'
const {LeaderRoleId} = require('../../config.json');
const roleid = '877450177991020584';

let accessDn = new MessageEmbed().setColor('RED').setDescription(`❌ **|** ${message.author} You can't remove roles of members, you dont have permission \nrequired-role: **Clan Leader**`)
let plsMntn = new MessageEmbed().setColor('RED').setDescription(`⭕ **|** ${message.author} please mention someone`)


if(!message.member.roles.cache.has(LeaderRoleId)){
    return message.channel.send({embeds: [accessDn]})
}

if(message.mentions.members.size == 0) return message.channel.send({embeds: [plsMntn]})

    message.mentions.members.forEach(membr => {
let alrdyhas = new MessageEmbed().setColor('GREY').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** doesn't has this clan role`)
let done = new MessageEmbed().setColor('BLUE').setDescription(`🔵 **|** **${membr.user.username + '#' + membr.user.discriminator}** has removed **${clanName}** Clan Role`).setFooter({ text: `role changed by ${message.author.username}`});

        if(!membr.roles.cache.has(roleid)){message.channel.send({embeds: [alrdyhas]})}
        else if(membr.roles.cache.has(roleid)){

        membr.roles.remove(message.guild.roles.cache.get(roleid)).then(
          message.channel.send({embeds: [done]})
        );
        }

    })
  }}