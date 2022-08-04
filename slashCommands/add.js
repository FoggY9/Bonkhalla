const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'add',
run: (client, interaction, options) => {

    // Clan roles
    const {LeaderRoleId} = require('../config.json');

    let Bedroom_Community = '851302141499015208';
    let Persistence = '877450177991020584';
    let Khudarto = '850939055872147456';
    let Five_Finger_N_Extra = '799676323948920902';
    let _7t1_Bangladesh = '772444761906348052';
    let Azure_Spirit = '838085789841752134';
    let Strawberry_Field = '1000623144786198548';
    let Bad_2v2_Players = '1004325446797762611';

    
    let targetClanPrefix = options._hoistedOptions[0].value;
    let targetId = options._hoistedOptions[1].value;

        if(targetClanPrefix == 'Bedroom Community') var target = Bedroom_Community;
        else if(targetClanPrefix == 'Persistence') var target = Persistence;
        else if(targetClanPrefix == 'Khudarto') var target = Khudarto;
        else if(targetClanPrefix == 'Five Finger N Extra') var target = Five_Finger_N_Extra;
        else if(targetClanPrefix == '7t1 Bangladesh') var target = _7t1_Bangladesh;
        else if(targetClanPrefix == 'Azure Spirit') var target = Azure_Spirit;
        else if(targetClanPrefix == 'Strawberry Field') var target = Strawberry_Field;
        else if(targetClanPrefix == 'Strawberry Field') var target = Bad_2v2_Players;

            let accessDn = new MessageEmbed().setColor('RED').setDescription(
                `❌ **|** ${interaction.user} You can't give roles to members, you dont have permission \nrequired-role: **Clan Leader**`)
            
            if(!interaction.member.roles.cache.has(LeaderRoleId)) return interaction.reply({embeds: [accessDn], ephemeral: false})

            
            var membr = interaction.guild.members.cache.get(targetId)
            let alrdyhas = new MessageEmbed().setColor('YELLOW').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** already has this clan role`)
            let done = new MessageEmbed().setColor('GREEN').setDescription(`🟢 **|** **${membr.user.username + '#' + membr.user.discriminator}** has added **${options._hoistedOptions[0].value}** Clan Role`).setTimestamp()
            .setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })
            
            if(membr.roles.cache.has(target)){interaction.reply({embeds: [alrdyhas], ephemeral: false})}
            else if(!membr.roles.cache.has(target)){

            membr.roles.add(interaction.guild.roles.cache.get(target)).then(
                interaction.reply({embeds: [done], ephemeral: false})
            ).catch(() =>{interaction.reply({content: 'error giving role', ephemeral: false})});
            }
}
}
