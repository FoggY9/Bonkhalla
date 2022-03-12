const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "botstatus",
    aliases: [],
    description: "check bot info",
    async execute(client, message, args) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

let embed = new MessageEmbed()
.setColor('#00fff7')
.setTitle('Bot Status')
.addField(' Avarage Bot Ping ', `${Math.round(message.client.ws.ping)} ms`, true)
.addField(' Uptime ', `${days}d, ${hours}h, ${minutes}m,`, true)
.addField(' Total Commands ', `${client.commands.size}`, true)
.setTimestamp()


message.channel.send({embeds: [embed]})

    }}