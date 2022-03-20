const { MessageEmbed } = require("discord.js")

module.exports = async(client, message) =>{

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let PREFIX = process.env['PREFIX'];

 if (message.author.bot) return;  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;
      try {
        command.execute(client, message, args);
      } catch (error) {
        console.error(error);
        message.reply("There was an error executing that command.").then(msg => {
          setTimeout(() => msg.delete(), 7 * 1000)
        }).catch(console.error);
      }
}