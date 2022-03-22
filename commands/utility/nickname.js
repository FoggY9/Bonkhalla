const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "nickname",
  aliases: [],
  description: "changes nickname",
async execute(client, message, args) {
if(!args.length){
    message.channel.send({content: `<@!${message.author.user.id}>\n **command usage:** \`^nichname \`your nickname\``})
}

let person = message.guild.members.cache.get(message.author.id);
person.setNickname(`${args.join(' ')}`)
.catch(() => {message.channel.send({content: `error, cant change your nichname`})
    .then(msg => setTimeout(() => {msg.delete()}, 5000))})
 }}


