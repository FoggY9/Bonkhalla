import { EmbedBuilder } from "discord.js";

export const name = 'leaveclan';
export const run = async(client:any, interaction:any, options:any) => {

    let clanrole = ['838085789841752134', '877450177991020584', '850939055872147456', '799676323948920902', '851302141499015208', '772444761906348052', '1000623144786198548', '1004325446797762611', '1007257584228646974']

var roles = await interaction.member.roles

    for(let i = 0; i < clanrole.length;i++){
        if(roles.cache.has(clanrole[i])){
          let roleName =  roles.cache.find((r:any) => r.id === clanrole[i]).name;
            roles.remove(interaction.guild.roles.cache.get(clanrole[i]))
           let done = new EmbedBuilder().setColor('#0000FF').setDescription(`🔵 **|** **${interaction.member.user.username + '#' + interaction.member.user.discriminator}** has removed **${roleName}** Clan Role`).setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' }).setTimestamp()
            interaction.channel.send({embeds: [done]})
        }
    }
    interaction.reply({content: `${interaction.member}, clan roles are cleared`, ephemeral: true})
}
