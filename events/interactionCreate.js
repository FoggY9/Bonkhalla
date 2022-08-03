
const { MessageEmbed } = require("discord.js");
module.exports = async(client, interaction) => {
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
        
}