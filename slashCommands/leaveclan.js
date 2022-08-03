const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'removeclan',
run: (client, interaction, options) => {

    interaction.reply({content: `taking action`})
    let clanrole = ['838085789841752134', '877450177991020584', '850939055872147456', '799676323948920902', '851302141499015208', '772444761906348052', '1000623144786198548']
    for(let i = 0; i < clanrole.length;i++){
        if( interaction.member.roles.cache.has(clanrole[i])){
          let roleName =  interaction.guild.roles.cache.find(r => r.id === clanrole[i]).name;
            interaction.member.roles.remove(interaction.guild.roles.cache.get(clanrole[i]))
           let done = new MessageEmbed().setColor('BLUE').setDescription(`🔵 **|** **${interaction.member.username + '#' + interaction.member.discriminator}** has removed **${roleName}** Clan Role`).setTimestamp()
            interaction.channel.send({embeds: [done]})
        }
    }
    interaction.channel.send({content: `${interaction.member}, clan roles are cleared`})
}
}