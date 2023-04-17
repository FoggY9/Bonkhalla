// an Admin only command

export const name = 'say';
export const run = async(client:any, interaction:any, options:any) => {

    if(interaction.member.id == '732554753342570516' || interaction.member.id == '646660718858600448'){


             const content = options._hoistedOptions[0].value;
            await interaction.channel.send({content: content})
            await interaction.reply({
                content: 'Message Sent',
                ephemeral: true
            })
          }
          else {interaction.reply({content: 'you cant use me', ephemeral: true})}
}
