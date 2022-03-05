const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  aliases: ['dmall'],
  description: "say something",
  execute(client, message, args) {
      //test
console.log(args)
      //test

    let members = [];
    let roleid = message.mentions.roles.first().id || args[0] || null;
    if(roleid == null)return message.channel.send({content: 'error: cannot get role'})
    
    message.guild.roles.cache.get(roleid).members.forEach(mmbr => {members.push(mmbr.id)})
    //get role mention

    
    let allstaffs = [...new Set(staffs)]; //removing duplicates
    var content = args.slice(0).slice(0).join(" ");
    //learn ............ usage of slice

    let sendx = [];
    let sendy = [];
    
    for(let i = 0; i < allstaffs.length; i++){
        let user = client.users.cache.find(user => user.id === allstaffs[i])
        
          if(!user.bot){
        await user.send({content: content}).then(() => {scs(user.username)}).catch(() => { fld(user.username);})
             }
        }
       async function scs(username){  sendy.push(`${username}`)}
       async function fld(username){  sendx.push(username)}
    
      let textscs = sendy.join('**,** ')
      let textfld = sendx.join('**,** ')
     let embed = new MessageEmbed().setTitle('🟣 | Direct Messaging...')
     if(textscs)embed.addField('🟢 | Sending successful', '> ' + textscs, false)
     if(textfld)embed.addField('⭕ | Sending Failed', '> ' + textfld, false)
    
    message.channel.send({embeds: [embed]});

  }}