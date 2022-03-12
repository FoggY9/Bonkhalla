const {MessageEmbed} = require('discord.js')
module.exports = {
  name: "leaveclan",
  aliases: ["leaveclans"],
  description: "leaves clan",
 async execute(client, message) {
let clanrole = ['946445769370652673', '947414050957037599', '947451245050855445']


for(let i = 0; i < clanrole.length;i++){
    if(await message.member.roles.cache.has(clanrole[i])){
      let roleName = await message.guild.roles.cache.find(r => r.id === clanrole[i]).name;
       await message.member.roles.remove(message.guild.roles.cache.get(clanrole[i]))
       let done = new MessageEmbed().setColor('BLUE').setDescription(`🔵 **|** **${message.author.username + '#' + message.author.discriminator}** has removed **${roleName}** Clan Role`).setTimestamp()
       await message.channel.send({embeds: [done]})
    }
}
message.channel.send({content: 'clan roles cleared'})

 }}