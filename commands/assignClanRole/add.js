const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "add",
  aliases: ['add', 'give'],
  description: "adds 7t1 role to a member",
 async execute(client, message) {
    let embed = new MessageEmbed().setTitle('Usage').setColor('WHITE')
    .setDescription('^add{prefix} {mentions}')
    message.channel.send({embeds: [embed]})
 }}