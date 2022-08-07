import { EmbedBuilder } from "discord.js";

export const info = {
  name: "add",
  aliases: ['add', 'give'],
  description: "adds 7t1 role to a member",}
  export async function execute(client:any, message:any) {
    let embed = new EmbedBuilder().setTitle('Usage').setColor('#FFFFFF')
    .setDescription('^add{prefix} {mentions}')
    message.channel.send({embeds: [embed]})
 }