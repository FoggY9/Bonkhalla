
const { MessageEmbed } = require("discord.js");
module.exports = async(client, interaction) => {
const { commandName, options } = interaction;

if (commandName === 'add') {
        
    interaction.reply({
        content: 'Taking action',
        ephemeral: true
    })
    // Clan roles
    const {LeaderRoleId} = require('../config.json');

    let Bedroom_Community = '851302141499015208';
    let Persistence = '877450177991020584';
    let Khudarto = '850939055872147456';
    let Five_Finger_N_Extra = '799676323948920902';
    let _7t1_Bangladesh = '772444761906348052';
    let Azure_Spirit = '838085789841752134';
    let Strawberry_Field = '1000623144786198548';

    
    let targetClanPrefix = options._hoistedOptions[0].value;
    let targetId = options._hoistedOptions[1].value;

        if(targetClanPrefix == 'Bedroom Community') var target = Bedroom_Community;
        else if(targetClanPrefix == 'Persistence') var target = Persistence;
        else if(targetClanPrefix == 'Khudarto') var target = Khudarto;
        else if(targetClanPrefix == 'Five Finger N Extra') var target = Five_Finger_N_Extra;
        else if(targetClanPrefix == '7t1 Bangladesh') var target = _7t1_Bangladesh;
        else if(targetClanPrefix == 'Azure Spirit') var target = Azure_Spirit;
        else if(targetClanPrefix == 'Strawberry Field') var target = Strawberry_Field;

            let accessDn = new MessageEmbed().setColor('RED').setDescription(
                `❌ **|** ${interaction.user} You can't give roles to members, you dont have permission \nrequired-role: **Clan Leader**`)
            
            if(!interaction.member.roles.cache.has(LeaderRoleId)) return interaction.channel.send({embeds: [accessDn]})
            
            
            var membr = interaction.guild.members.cache.get(targetId)
            let alrdyhas = new MessageEmbed().setColor('YELLOW').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** already has this clan role`)
            let done = new MessageEmbed().setColor('GREEN').setDescription(`🟢 **|** **${membr.user.username + '#' + membr.user.discriminator}** has added **${options._hoistedOptions[0].value}** Clan Role`).setTimestamp()
            .setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })
            
            if(membr.roles.cache.has(target)){interaction.channel.send({embeds: [alrdyhas]})}
            else if(!membr.roles.cache.has(target)){

            membr.roles.add(interaction.guild.roles.cache.get(target)).then(
                interaction.channel.send({embeds: [done]})
            ).catch(() =>{interaction.channel.send({content: 'error giving role'})});
            }
    
        

}
if (commandName === 'help') {
    let embed = new MessageEmbed()
.setColor('AQUA')
.setTitle('All Commands')
.addField('• Give clan role', `__usage:__ ^add\`clan tag, first 3 letters\` @mentions\n__description:__ adds clan role to targeted users\n__example:__ ^add7t1 @redapple \n there's also a slash command /add`)
.addField('• Remove clan role', `__usage:__ ^remove\`clan tag, first 3 letters\` @mentions\n__description:__ removes clan role to targeted users\n__example:__ ^remove7t1 @redapple \n there's also a slash command /remove`)
.addField('• Leave clan', '__usage:__ ^leaveclan\n__description:__ leaves clan and remove clan roles')
.setFooter({text: '^botstatus to check bot status', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.addField('• ADMIN Commands', 
'> dmStaffs \n__usage:__ ^dmstaffs \`Content\`\n__description:__ dm all staffs (mod, jmod, staffs)\n\n> send/dmall\n__usage:__ ^send \`Role\` \`Content\`\n__description:__ sends mass dm to a specific role holders'
)


interaction.channel.send({embeds : [embed]})
}
if (commandName === 'remove') {

    interaction.reply({
        content: 'Taking action',
        ephemeral: true
    })
    // Clan roles
    const {LeaderRoleId} = require('../config.json');

        let Bedroom_Community = '851302141499015208';
        let Persistence = '877450177991020584';
        let Khudarto = '850939055872147456';
        let Five_Finger_N_Extra = '799676323948920902';
        let _7t1_Bangladesh = '772444761906348052';
        let Azure_Spirit = '838085789841752134';
        let Strawberry_Field = '1000623144786198548';

    
    let targetClanPrefix = options._hoistedOptions[0].value;
    let targetId = options._hoistedOptions[1].value;

        if(targetClanPrefix == 'Bedroom Community') var target = Bedroom_Community;
        else if(targetClanPrefix == 'Persistence') var target = Persistence;
        else if(targetClanPrefix == 'Khudarto') var target = Khudarto;
        else if(targetClanPrefix == 'Five Finger N Extra') var target = Five_Finger_N_Extra;
        else if(targetClanPrefix == '7t1 Bangladesh') var target = _7t1_Bangladesh;
        else if(targetClanPrefix == 'Azure Spirit') var target = Azure_Spirit;
        else if(targetClanPrefix == 'Strawberry Field') var target = Strawberry_Field;

let accessDn = new MessageEmbed().setColor('RED').setDescription(`❌ **|** ${interaction.user} You can't remove roles of members, you dont have permission \nrequired-role: **Clan Leader**`)

if(!interaction.member.roles.cache.has(LeaderRoleId)){
    return interaction.channel.send({embeds: [accessDn]})
}

var membr = interaction.guild.members.cache.get(targetId)
let alrdyhas = new MessageEmbed().setColor('GREY').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** doesn't has this clan role`)
let done = new MessageEmbed().setColor('BLUE').setDescription(`🔵 **|** **${membr.user.username + '#' + membr.user.discriminator}** has removed **${options._hoistedOptions[0].value}** Clan Role`).setTimestamp()
.setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })
        if(!membr.roles.cache.has(target)){interaction.channel.send({embeds: [alrdyhas]})}
        else if(membr.roles.cache.has(target)){

        membr.roles.remove(interaction.guild.roles.cache.get(target)).then(
          interaction.channel.send({embeds: [done]})
        );
        }
}
}