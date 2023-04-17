
export const name = 'hidevc';
export const run = (client:any, interaction:any) => {

    // if donot have ownership
    if(client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel.id}`)[1] !== interaction.member.id) return interaction.reply({content: 'you dont have the ownership', ephemeral:true})
    


    //change averyone permission
    //remove view
    interaction.reply({
        content: "yamete kudasai",
        ephemeral: true
    })
    
}
