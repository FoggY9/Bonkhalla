import { EmbedBuilder } from "discord.js";

export const name = 'botstatus';
export const run = (client:any, interaction:any) => {
    
    let seconds = Math.floor(client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

let embed = new EmbedBuilder()
.setColor('#00fff7')
.setTitle('Bot Status')
.addFields([
    {name: '| Average Bot Ping |', value:`| ${Math.round(client.ws.ping)} ms |`, inline: true },
    {name: '| Uptime |', value: `| ${days}d, ${hours}h, ${minutes}m |`, inline: true },
    {name: '| Total Commands |', value:`| ${client.slashcmd.size} |`, inline: true }])
.setFooter({text: 'Brawlhalla Bangladesh', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.setTimestamp()



    interaction.reply({
        embeds: [embed],
        ephemeral: true
    })
    
}
