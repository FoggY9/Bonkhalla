const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: [],
  description: "say something",
  execute(client, message, args) {

    const perms = ['ADMINISTRATOR' || 'MANAGE_SERVER' || 'MANAGE_CHANNELS'];

    if(!message.member.permissions.has(perms)){return message.channel.send('you dont have permissions to use this command')}

if(!args.length){return message.channel.send('atleast write some then i can say')}

    const content = args.slice(0).join(" ");
    message.channel.send({content: content}).then(message.delete())

  }};