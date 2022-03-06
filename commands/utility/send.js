const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "send",
  aliases: ['dmall'],
  description: "dm all role holders",
 async execute(client, message, args) {

    const perms = ['ADMINISTRATOR'];
    if(!message.member.permissions.has(perms)){return message.channel.send({content: 'you dont have permissions to use this command'})}

let members = []
let targetRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || null;
if(targetRole == null)return message.channel.send({content: 'error: cannot get role'})
//get role mention
targetRole.members.forEach(mmbr => {members.push(mmbr.id)})

var content = args.slice(1).join(" ");
 if(!content.length) return message.channel.send('ki message diben sheta to bolen \nwhat do you want to send?');

let sendx = [];
let sendy = [];

for(let i = 0; i < members.length; i++){
    let user = client.users.cache.find(user => user.id === members[i])

            await user.send({content: content}).then(() => {scs(user.username)}).catch(() => { fld(user.username);})
}
    async function scs(username){  sendy.push(`${username}`)}
    async function fld(username){  sendx.push(`${username}`)}

        let textscs = sendy.join('**,** ')
        let textfld = sendx.join('**,** ')
        let embed = new MessageEmbed().setTitle('🟣 | Direct Messaging...')
        if(textscs)embed.addField('🟢 | Sending successful', '> ' + textscs, false)
        if(textfld)embed.addField('⭕ | Sending Failed', '> ' + textfld, false)

await message.channel.send({embeds: [embed]});

  }}