import { EmbedBuilder } from "discord.js";

export const name = 'help';
export const run = (client:any, interaction:any, options:any) => {
    
    let embed = new EmbedBuilder()
    .setColor('#00FFFF')
    .setTitle('All Commands')
    .addFields([
        {name:'• Give clan role', value:`__usage:__ ^add\`clan tag, first 3 letters\` @mentions\n__description:__ adds clan role to targeted users\n__example:__ ^add7t1 @redapple \n there's also a slash command /add`},
        {name:'• Remove clan role', value:`__usage:__ ^remove\`clan tag, first 3 letters\` @mentions\n__description:__ removes clan role to targeted users\n__example:__ ^remove7t1 @redapple \n there's also a slash command /remove`},
        {name:'• Leave clan', value:'__usage:__ ^leaveclan\n__description:__ leaves clan and remove clan roles'},
        {name:'• ADMIN Commands', value:'> dmStaffs \n__usage:__ ^dmstaffs \`Content\`\n__description:__ dm all staffs (mod, jmod, staffs)\n\n> send/dmall\n__usage:__ ^send \`Role\` \`Content\`\n__description:__ sends mass dm to a specific role holders'}
      ])
    .setFooter({text: '^botstatus to check bot status', iconURL: 'https://i.imgur.com/tZ2sJum.png'})

    
    interaction.reply({
        embeds: [embed],
        ephemeral: false
    })
    
}