const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "aboutus69",
  aliases: [],
  description: "about us embed",
  execute(client, message, args) {

let embed = new MessageEmbed()
.setColor('#4dffe4')
.setTitle('About us')
.setThumbnail('https://i.imgur.com/tZ2sJum.png')
.setAuthor({name: 'Brawlhalla Bangladesh', iconURL: 'https://i.imgur.com/tZ2sJum.png'})
.setFooter({ text: 'Email : brawlhallabangladeshofficial@gmail.com', iconURL: 'https://i.imgur.com/tZ2sJum.png' })
.setDescription(`The Server **Brawlhalla Bangladesh Official** was created to gather Brawlhalla players from around our country. It's a gaming community of more than thousand people of same interest .\n\nGamer's gather here to discuss about the game , Play together , Find Teammates, Participating in tournaments. \n\n`)
.addField('• Official Partners', '>  Azure Spirit • [Link](https://discord.gg/mFB59MeuKf)\n> Carnales • [Link](https://discord.gg/XeUp5kraXy)\n> MazeCity • [Link](https://discord.gg/Mbp9NKDhaq)')
.setImage('https://i.imgur.com/JA47rpX.jpg')

let row = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setURL('https://www.twitch.tv/brawlhalla_bangladesh')
        .setLabel('Twitch')
        .setStyle('LINK'),
        ).addComponents(
    new MessageButton()
        .setURL('https://discord.gg/G3VBNfxnVt')
        .setLabel('Discord')
        .setStyle('LINK'),
).addComponents(
    new MessageButton()
        .setURL('https://twitter.com/BrawlhallaBD')
        .setLabel('Twitter')
        .setStyle('LINK'),
).addComponents(
    new MessageButton()
        .setURL('https://www.facebook.com/BrawlhallaBD')
        .setLabel('Fb Page')
        .setStyle('LINK'),
).addComponents(
    new MessageButton()
        .setURL('https://www.facebook.com/groups/732780960995186')
        .setLabel('Fb Group')
        .setStyle('LINK'),
)
let row2 = new MessageActionRow()
.addComponents(
    new MessageButton()
        .setURL('https://discord.gg/mFB59MeuKf')
        .setLabel('Azure Spirit')
        .setStyle('LINK'),
).addComponents(
    new MessageButton()
        .setURL('https://discord.gg/XeUp5kraXy')
        .setLabel('Carnales')
        .setStyle('LINK'),
).addComponents(
    new MessageButton()
        .setURL('https://discord.gg/Mbp9NKDhaq')
        .setLabel('MazeCity')
        .setStyle('LINK'),
)
client.channels.cache.get('846005181061660672').send({embeds: [embed], components: [row, row2]})
  }}
