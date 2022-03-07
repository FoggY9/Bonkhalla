
module.exports = {
  name: "leaveclan",
  aliases: ["leaveclans"],
  description: "leaves clan",
 async execute(client, message) {
let clanrole = ['946445769370652673', '947414050957037599', '947451245050855445']


for(let i = 0; i < clanrole.length;i++){
    if(await message.member.roles.cache.has(clanrole[i])){
       // let clanName = 
       await message.member.roles.remove(message.guild.roles.cache.get(clanrole[i]))
        await message.channel.send({content: `clanrole has been removed`}) //${clanName} has been removed
        //removed clanrole syntax
    }
}

 }}