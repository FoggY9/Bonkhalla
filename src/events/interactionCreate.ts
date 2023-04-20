
export default async(client:any, interaction:any) => {
    if (interaction.isChatInputCommand()) {
        const { commandName, options } = interaction;

const slashcmd = client.slashcmd.get(commandName);

    if (slashcmd){
        try {
            slashcmd.run(client, interaction, options);

        } catch (error) {
            console.error(error);
            interaction.reply({content: "Error occourred, cant run this command.", ephemeral: true})
        }
        }
    }else if(interaction.isButton()){
        
        const { customId } = interaction;
        const button = client.buttons.get(customId);

    if (button){
        try {
            // check if the interactor joined a vc & the joined channel is recorded as a temp vc
            if(interaction.member.voice && client.jointocreatemap.get(`tempvc_${interaction.member.voice.channel?.id}`)) {
                button.run(client, interaction);
                }
                else{
                    return interaction.reply({content: 'you are not in a temp vc', ephemeral: true})
                }
        } catch (error) {
            console.error(error);
            interaction.reply({content: "Error occourred, cant run this command.", ephemeral: true})
        }
        } 
    }else if(interaction.isUserSelectMenu()){

        const { customId } = interaction;
        const menu = client.menus.get(customId);
        const interactorId = interaction.user.id
        const targetId = interaction.users.entries().next().value[0]
        if(menu){
        try {

            menu.run(client, interaction, interactorId, targetId)

        } catch (error) {
            console.error(error);
            interaction.reply({content: "Error occourred, cant run this command.", ephemeral: true})
        }
    }
    }else{
        console.log("NOT HANDLED INTERACTION :" + interaction)
    }

}