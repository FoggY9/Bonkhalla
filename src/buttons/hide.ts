import { PermissionsBitField } from "discord.js";

export const name = 'hidevc';
export const run = (client:any, interaction:any) => {

    // if donot have ownership
    if(client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id) return interaction.reply({content: 'you dont have the ownership', ephemeral:true})
    


    //change everyone permission
    interaction.member.voice.channel.permissionOverwrites.set([
        {
          id: interaction.guild.roles.everyone.id,
          deny: [PermissionsBitField.Flags.ViewChannel]
        }
      ]).then(()=> {
        interaction.reply({
          content: "Your channel is hidden",
          ephemeral: true
      })
      })
    //remove view

    
}
