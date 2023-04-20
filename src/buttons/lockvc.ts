import { PermissionsBitField } from "discord.js";

export const name = 'lockvc';
export const run = (client:any, interaction:any) => {
// if donot have ownership
let tempvc = client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)
if(tempvc[1] !== interaction.member.id) return interaction.reply({content: 'you dont have the ownership', ephemeral:true})

    //change everyone permission

interaction.member.voice.channel.permissionOverwrites.set([
    {
      id: interaction.guild.roles.everyone.id,
      deny: [PermissionsBitField.Flags.Connect]
    }
  ]).then(()=> {
    interaction.reply({
      content: "Your channel is Locked",
      ephemeral: true
  })
  })
    
}
