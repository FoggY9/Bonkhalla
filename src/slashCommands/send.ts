import { EmbedBuilder } from "discord.js";
export const name = 'send';
export const run = async(client:any, interaction:any, options:any) => {


  const perms = ['ADMINISTRATOR'];
  if(!interaction.member.permissions.has(perms)){return interaction.reply({content: 'you dont have permissions to use this command', ephemeral: true})}

let members:string[] = []
let targetRole = interaction.guild.roles.cache.get(options._hoistedOptions[0].value); //collecting specified role
//get role mention

if(!targetRole.members) return interaction.channel.send({content: 'nobody has this role'})
targetRole.members.forEach((mmbr:any) => {members.push(mmbr.id)}) //adding all memberId's to an array

const content = options._hoistedOptions[1].value; // the content

for(let i = 0; i < members.length; i++){
  let user = client.users.cache.find((user:any) => user.id === members[i])

  await user.send({content: content}).then(() => {scs(user.username)}).catch(() => { fld(user.username);})
}

let sendx:string[] = [];
let sendy:string[] = [];

   function scs(username:string){  sendy.push(`${username}`)} //if success to dm
   function fld(username:string){  sendx.push(`${username}`)} //if failed to dm

      let textscs = sendy.join('**,** ')
      let textfld = sendx.join('**,** ')
      let embed = new EmbedBuilder().setTitle('🟣 | Direct Messaging...')
      if(textscs)embed.addFields({name:'🟢 | Sending successful',value: '> ' + textscs, inline:false}) //adding fields
      if(textfld)embed.addFields({name:'⭕ | Sending Failed', value:'> ' + textfld, inline:false})//adding fields

          interaction.reply({embeds: [embed], ephemeral: false})
}
