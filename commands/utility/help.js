const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ['commands', 'cmd'],
  description: "all command list",
 execute(client, message, args) {

let embed = new MessageEmbed()
.setColor('AQUA')
.setTitle('All Commands')
.addField('• Give clan role', `__usage:__ ^add\`clan tag, first 3 letters\` @mentions\n__description:__ adds clan role to targeted users\n__example:__ ^add7t1 @redapple \n there's also a slash command /add`)
.addField('• Remove clan role', `__usage:__ ^remove\`clan tag, first 3 letters\` @mentions\n__description:__ removes clan role to targeted users\n__example:__ ^remove7t1 @redapple \n there's also a slash command /remove`)
.addField('• Leave clan', '__usage:__ ^leaveclan\n__description:__ leaves clan and remove clan roles')
.setFooter({text: '^botstatus to check bot status', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.addField('• ADMIN Commands', 
'> dmStaffs \n__usage:__ ^dmstaffs \`Content\`\n__description:__ dm all staffs (mod, jmod, staffs)\n\n> send/dmall\n__usage:__ ^send \`Role\` \`Content\`\n__description:__ sends mass dm to a specific role holders'
)


message.channel.send({embeds : [embed]})


}}