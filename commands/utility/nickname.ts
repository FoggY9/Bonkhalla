import { MessageEmbed } from "discord.js";

export const info = {
  name: "nickname",
  aliases: [],
  description: "changes nickname",
async execute(client:any, message:any, args:string[]) {
  console.log(message.author.name)
if(!args.length){
   return message.channel.send({content: `<@!${message.author.id}>\n __command usage:__ ^nichname  \`your nickname\``})
}

let person = message.guild.members.cache.get(message.author.id);
person.setNickname(`${args.join(' ')}`)
.then(() => {client.channels.cache.get('955447531716878427').send({content: `changed nickname  ::of <@!${message.author.id}> ::to ${args.join(' ')}`}); message.react('✅');})
.catch(() => {message.channel.send({content: `error, cant change your nichname`})
    .then((msg:any) => setTimeout(() => {msg.delete()}, 5000))})
 }}


