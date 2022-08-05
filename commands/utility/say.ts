export const info = {
  name: "say",
  aliases: [],
  description: "say something",}

export function execute(client:any, message:any, args:string[]) {
    message.delete()
if(message.author.id == '732554753342570516' || message.author.id == '646660718858600448'){

if(!args.length){return message.channel.send('atleast write some then i can say')}

    const content = args.slice(0).join(" ");
    message.channel.send({content: content})
  }
  else {message.channel.send({content: 'you cant use me'})}
  }
