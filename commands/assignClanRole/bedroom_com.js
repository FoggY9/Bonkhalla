const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "addrolebed",
  aliases: ['addbed', 'givebed'],
  description: "adds bed role to a member",
 async execute(client, message) {

const clanName = 'bedroom community'
const {LeaderRoleId} = require('../../config.json');
const roleid = '851302141499015208';

let accessDn = new MessageEmbed().setColor('RED').setDescription(`❌ **|** ${message.author} You can't give roles to members, you dont have permission \nrequired-role: **Clan Leader**`)
let plsMntn = new MessageEmbed().setColor('RED').setDescription(`⭕ **|** ${message.author} please mention someone`)


if(!message.member.roles.cache.has(LeaderRoleId)) return message.channel.send({embeds: accessDn})


if(message.mentions.members.size == 0) return message.channel.send({embeds: [plsMntn]})

    message.mentions.members.forEach(membr => {
let alrdyhas = new MessageEmbed().setColor('YELLOW').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** already has this clan role`)
let done = new MessageEmbed().setColor('GREEN').setDescription(`🟢 **|** **${membr.user.username + '#' + membr.user.discriminator}** has added **${clanName}** Clan Role`)


        if(membr.roles.cache.has(roleid)){message.channel.send({embeds: [alrdyhas]})}
        else if(!membr.roles.cache.has(roleid)){

        membr.roles.add(message.guild.roles.cache.get(roleid)).then(
          message.channel.send({embeds: [done]})
        );
        }

    })
  }}