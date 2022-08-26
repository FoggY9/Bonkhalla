import { EmbedBuilder } from "discord.js";

export const info = {
    name: "botstatus",
    aliases: [],
    description: "check bot info",}
    export async function execute(client:any, message:any, args:string[]) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

let embed = new EmbedBuilder()
.setColor('#00fff7')
.setTitle('Bot Status')
.addFields([
    {name: '| Average Bot Ping |', value:`| ${Math.round(message.client.ws.ping)} ms |`, inline: true },
    {name: '| Uptime |', value: `| ${days}d, ${hours}h, ${minutes}m |`, inline: true },
    {name: '| Uptime |', value:`| ${days}d, ${hours}h, ${minutes}m |`, inline: true },
    {name: '| Total Commands |', value:`| ${client.commands.size} |`, inline: true }])
.setFooter({text: 'use ^cmd to check all commands', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.setTimestamp()


message.channel.send({embeds: [embed]})

    }