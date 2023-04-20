import {ActionRowBuilder, PermissionFlagsBits, UserSelectMenuBuilder} from 'discord.js'
export const name = 'mutevc';
export const run = (client:any, interaction:any) => {
// if donot have ownership
if(client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id) return interaction.reply({content: 'you dont have the ownership', ephemeral:true})


const row = new ActionRowBuilder()
     .setComponents(
       new UserSelectMenuBuilder()
     .setCustomId('mutevc').setMaxValues(1).setMinValues(1).setPlaceholder('Select one User')
     );
 

    interaction.reply(
      {content: 'select someone to mute', components: [row], ephemeral: true}
      )
    
}