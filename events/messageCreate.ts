
export default async(client:any, message:any) =>{

const escapeRegex = (str:string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let PREFIX = process.env['PREFIX'];

 if (message.author.bot) return;  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX!)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd:any) => cmd.info.aliases && cmd.info.aliases.includes(commandName));

  if (!command) return;
      try {
        command.execute(client, message, args);
      } catch (error) {
        console.error(error);
        message.reply("Error occourred, cant run this command.").then((msg:any) => {
          setTimeout(() => msg.delete(), 7 * 1000)
        }).catch(console.error);
      }
}