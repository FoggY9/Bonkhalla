import { ActionRowBuilder, UserSelectMenuBuilder } from "discord.js";

export const name = 'dcvcmember';
export const run = (client:any, interaction:any) => {
// if donot have ownership
if(client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id) return interaction.reply({content: 'you dont have the ownership', ephemeral:true})


const row = new ActionRowBuilder()
     .setComponents(
       new UserSelectMenuBuilder()
     .setCustomId('dcvcmember').setMaxValues(1).setMinValues(1).setPlaceholder('Select one User')
     );
 
    interaction.reply(
    {content: 'select someone to disconnect', components: [row], ephemeral: true}
    )
    
}
