export const info = {
    name: "b",
    aliases: [],
    description: "english chat",
  }
  export async function execute(client:any, message:any, args:string[]) {
    const content = args.slice(0).join(" ");
    client.chatter.chat({message: content, name:"bonkhalla", owner:"foggy", user: Number(message.author.id)}, "bn").then((reply:string) => {
        message.reply({content: reply});});
  }