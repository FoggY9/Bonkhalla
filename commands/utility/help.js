const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ['commands', 'cmd'],
  description: "all command list",
 execute(client, message, args) {

let embed = new MessageEmbed()
.setColor('AQUA')
.setTitle('All Commands')
.addField('• Give clan role', `**usage:** ^add\`clan tag, first 3 letters\` @mentions\n**description:** adds clan role to targeted users\n**example:** ^add7t1 @redapple`)
.addField('• Remove clan role', `**usage:** ^remove\`clan tag, first 3 letters\` @mentions\n**description:** removes clan role to targeted users\n**example:** ^remove7t1 @redapple`)
.addField('• Leave clan', 'usage: ^leaveclan\ndescription: leaves clan and remove clan roles')
.setFooter({text: '^botstatus to check bot status', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.addField('• ADMIN Commands', 
'> dmStaffs \nusage: ^dmstaffs \`Content\`\ndescription: dm all staffs (mod, jmod, staffs)\n\n> send/dmall\nusage: ^send \`Role\` \`Content\`\ndescription: sends mass dm to a specific role holders'
)


message.channel.send({embeds : [embed]})


}}