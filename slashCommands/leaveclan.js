const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'leaveclan',
run: async(client, interaction, options) => {

    let clanrole = ['838085789841752134', '877450177991020584', '850939055872147456', '799676323948920902', '851302141499015208', '772444761906348052', '1000623144786198548', '1004325446797762611']

var roles = await interaction.member.roles

    for(let i = 0; i < clanrole.length;i++){
        if(roles.cache.has(clanrole[i])){
          let roleName =  roles.cache.find(r => r.id === clanrole[i]).name;
            roles.remove(interaction.guild.roles.cache.get(clanrole[i]))
           let done = new MessageEmbed().setColor('BLUE').setDescription(`🔵 **|** **${interaction.member.user.username + '#' + interaction.member.user.discriminator}** has removed **${roleName}** Clan Role`).setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' }).setTimestamp()
            interaction.channel.send({embeds: [done]})
        }
    }
    interaction.reply({content: `${interaction.member}, clan roles are cleared`, ephemeral: true})
}
}