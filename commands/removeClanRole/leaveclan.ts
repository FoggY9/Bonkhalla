import { MessageEmbed } from 'discord.js';
export const info = {
  name: "leaveclan",
  aliases: ["leaveclans"],
  description: "leaves clan",}
export async function execute(client:any, message:any) {
let clanrole = ['838085789841752134', '877450177991020584', '850939055872147456', '799676323948920902', '851302141499015208', '772444761906348052', '1000623144786198548', '1004325446797762611']

var roles = await message.member.roles
for(let i = 0; i < clanrole.length;i++){
    if(roles.cache.has(clanrole[i])){
      let roleName = roles.cache.find((r:any) => r.id === clanrole[i]).name;
       await roles.remove(message.guild.roles.cache.get(clanrole[i]))
       let done = new MessageEmbed().setColor('BLUE').setDescription(`🔵 **|** **${message.author.username + '#' + message.author.discriminator}** has removed **${roleName}** Clan Role`).setTimestamp()
       await message.channel.send({embeds: [done]})
    }
}
message.channel.send({content: 'clan roles cleared'})

 }
