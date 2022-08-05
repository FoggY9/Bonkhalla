import { MessageEmbed } from "discord.js";

export const info = {
  name: "send",
  aliases: ['dmall'],
  description: "dm all role holders",
 async execute(client:any, message:any, args:string[]) {

    const perms = ['ADMINISTRATOR'];
    if(!message.member.permissions.has(perms)){return message.channel.send({content: 'you dont have permissions to use this command'})}

let members:string[] = []
let targetRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || null; //collecting specified role
if(targetRole == null)return message.channel.send({content: 'error: cannot get role'})
//get role mention

if(!targetRole.members) return message.channel.send({content: 'nobody has this role'})
targetRole.members.forEach((mmbr:any) => {members.push(mmbr.id)}) //adding all memberId's to an array

var content = args.slice(1).join(" "); // the content
 if(!content.length) return message.channel.send('ki message diben sheta to bolen \nwhat do you want to send?');//if content is empty


for(let i = 0; i < members.length; i++){
    let user = client.users.cache.find((user:any) => user.id === members[i])

    await user.send({content: content}).then(() => {scs(user.username)}).catch(() => { fld(user.username);})
}

let sendx:string[] = [];
let sendy:string[] = [];

    async function scs(username:string){  sendy.push(`${username}`)} //if success to dm
    async function fld(username:string){  sendx.push(`${username}`)} //if failed to dm

        let textscs = sendy.join('**,** ')
        let textfld = sendx.join('**,** ')
        let embed = new MessageEmbed().setTitle('🟣 | Direct Messaging...')
        if(textscs)embed.addField('🟢 | Sending successful', '> ' + textscs, false) //adding fields
        if(textfld)embed.addField('⭕ | Sending Failed', '> ' + textfld, false)//adding fields

await message.channel.send({embeds: [embed]}); // sending result

  }}