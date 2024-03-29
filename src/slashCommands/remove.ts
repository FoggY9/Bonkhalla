import { EmbedBuilder } from "discord.js";

export const name = 'remove';
export const run = (client:any, interaction:any, options:any) => {

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
        let tcu = '1007257584228646974';
        let XUnbeatablesX = '1101598854719209624';

    
    let targetClanPrefix = options._hoistedOptions[0].value;
    let targetId = options._hoistedOptions[1].value;
    let target:string;
    
        if(targetClanPrefix == 'Bedroom Community') target = Bedroom_Community;
        else if(targetClanPrefix == 'Persistence') target = Persistence;
        else if(targetClanPrefix == 'Khudarto') target = Khudarto;
        else if(targetClanPrefix == 'Five Finger N Extra') target = Five_Finger_N_Extra;
        else if(targetClanPrefix == '7t1 Bangladesh') target = _7t1_Bangladesh;
        else if(targetClanPrefix == 'Azure Spirit') target = Azure_Spirit;
        else if(targetClanPrefix == 'Strawberry Field') target = Strawberry_Field;
        else if(targetClanPrefix == 'Bad 2v2 Players') target = Bad_2v2_Players;
        else if(targetClanPrefix == 'TCU GANG') target = tcu;
        else if(targetClanPrefix == 'XUnbeatablesX') target = XUnbeatablesX;

let accessDn = new EmbedBuilder().setColor('#FF0000').setDescription(`❌ **|** ${interaction.user} You can't remove roles of members, you dont have permission \nrequired-role: **Clan Leader**`)

if(!interaction.member.roles.cache.has(LeaderRoleId)){
    return interaction.reply({embeds: [accessDn], ephemeral: false})
}

const membr = interaction.guild.members.cache.get(targetId)
let alrdyhas = new EmbedBuilder().setColor('#808080').setDescription(`🟡 **|** **${membr.user.username + '#'+ membr.user.discriminator}** doesn't has this clan role`)
let done = new EmbedBuilder().setColor('#0000FF').setDescription(`🔵 **|** **${membr.user.username + '#' + membr.user.discriminator}** has removed **${options._hoistedOptions[0].value}** Clan Role`).setTimestamp()
.setFooter({ text: `action by ${interaction.user.username}#${interaction.user.discriminator}`, iconURL: 'https://i.imgur.com/tZ2sJum.png' })
        if(!membr.roles.cache.has(target!)){interaction.reply({embeds: [alrdyhas], ephemeral: false})}
        else if(membr.roles.cache.has(target!)){

        membr.roles.remove(interaction.guild.roles.cache.get(target!)).then(
          interaction.reply({embeds: [done], ephemeral: false})
        );
        }
}
