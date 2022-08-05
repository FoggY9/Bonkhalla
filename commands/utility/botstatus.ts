import { MessageEmbed } from "discord.js";

export const info = {
    name: "botstatus",
    aliases: [],
    description: "check bot info",}
    export async function execute(client:any, message:any, args:string[]) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

let embed = new MessageEmbed()
.setColor('#00fff7')
.setTitle('Bot Status')
.addField('| Average Bot Ping |', `| ${Math.round(message.client.ws.ping)} ms |`, true)
.addField('| Uptime |', `| ${days}d, ${hours}h, ${minutes}m |`, true)
.addField('| Total Commands |', `| ${client.commands.size} |`, true)
.setFooter({text: 'use ^cmd to check all commands', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.setTimestamp()


message.channel.send({embeds: [embed]})

    }