
export default async(client:any, interaction:any) => {
    if (interaction.isChatInputCommand()) {
        const { commandName, options } = interaction;

const slashcmd = client.slashcmd.get(commandName);

    if (slashcmd){
        try {
            slashcmd.run(client, interaction, options);

        } catch (error) {
            console.error(error);
            interaction.reply({content: "Error occourred, cant run this command."})
        }
        }
    }else if(interaction.isButton()){
        
        const { customId } = interaction;
        const button = client.buttons.get(customId);

    if (button){
        try {
            if(interaction.member.voice.parentId !== '751266531597353040') return interaction.reply({content: 'you are not in a temp vc'})
            button.run(client, interaction);

        } catch (error) {
            console.error(error);
            interaction.reply({content: "Error occourred, cant run this command."})
        }
        } 
    }

}