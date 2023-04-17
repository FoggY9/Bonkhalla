import {PermissionFlagsBits} from 'discord.js'
export const name = 'vcpermit';
export const run = (client:any, interaction:any) => {
// if donot have ownership
if(client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id) return interaction.reply({content: 'you dont have the ownership', ephemeral:true})


interaction.member.voice.channel.overwritePermissions([
    {
      id: "targetuserId",
      deny: [PermissionFlagsBits.Connect]
    }
  ]);
    interaction.reply({
        content: "yamete kudasai",
        ephemeral: true
    })
    
}