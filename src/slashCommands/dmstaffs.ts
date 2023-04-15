import { EmbedBuilder } from "discord.js";
export const name = 'dm staffs';
export const run = async(client:any, interaction:any, options:any) => {


    const perms = ['ADMINISTRATOR'];
    if(!interaction.member.permissions.has(perms)){return interaction.reply({content: 'you dont have permissions to use this command', epheberal: true})}

let staffs:string[] = [];
const {Staff, Jmod, Mod} = require('../../config.json');

if(interaction.guild.roles.cache.get(Staff)){interaction.guild.roles.cache.get(Staff).members.forEach((mmbr:any) => {staffs.push(mmbr.id)})}
if(interaction.guild.roles.cache.get(Jmod)){interaction.guild.roles.cache.get(Jmod).members.forEach((mmbr:any) => {staffs.push(mmbr.id)})}
if(interaction.guild.roles.cache.get(Mod)){interaction.guild.roles.cache.get(Mod).members.forEach((mmbr:any) => {staffs.push(mmbr.id)})}

//added memberid's to an array

let allstaffs = [...new Set(staffs)]; //removing duplicates
var content = options._hoistedOptions[0].value;


let sendx:string[] = [];
let sendy:string[] = [];

for(let i = 0; i < allstaffs.length; i++){
    let user = client.users.cache.find((user:any) => user.id === allstaffs[i])
    
      if(!user.bot){
    user.send({content: content}).then(() => {scs(user.username)}).catch(() => { lll(user.username);})
         }
    }
   function scs(username:string){  sendy.push(`${username}`)}
   function lll(username:string){  sendx.push(username)}

  let textscs = sendy.join('**,** ')
  let textfld = sendx.join('**,** ')
 let embed = new EmbedBuilder().setTitle('🟣 | Direct Messaging...')
 if(textscs)embed.addFields({name:'🟢 | Sending successful', value:'> ' + textscs, inline:false})
 if(textfld)embed.addFields({name:'⭕ | Sending Failed', value:'> ' + textfld, inline:false})

          interaction.reply({embeds: [embed], ephemeral: false})
}
