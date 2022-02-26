const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: [],
  description: "say something",
  execute(client, message, args) {

if(message.author.id == '732554753342570516' || message.author.id == '646660718858600448'){

if(!args.length){return message.channel.send('atleast write some then i can say')}

    const content = args.slice(0).join(" ");
    message.channel.send({content: content}).then(message.delete())
  }
  else {message.channel.send({content: 'you cant use me'})}
  }};