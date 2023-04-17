import { EmbedBuilder } from "discord.js";

export const name = 'help';
export const run = (client:any, interaction:any) => {
    
    let embed = new EmbedBuilder()
    .setColor('#00FFFF')
    .setTitle('All Commands')
    .addFields([
        {name:'• Give clan role', value:`/add`},
        {name:'• Remove clan role', value:`/remove`},
        {name:'• Leave clan (clear clan roles)', value:'/leaveclan'},
        {name:'• ADMIN Commands', value:'/send, /dmstaffs'}
      ])
    .setFooter({text: 'Brawlhalla Bangladesh', iconURL: 'https://i.imgur.com/tZ2sJum.png'})

    
    interaction.reply({
        embeds: [embed],
        ephemeral: false
    })
    
}
