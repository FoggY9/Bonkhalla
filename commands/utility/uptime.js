module.exports = {
    name: "uptime",
    aliases: ["u"],
    description: "Check the uptime",
    execute(client, message) {
      let seconds = Math.floor(message.client.uptime / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
  
      seconds %= 60;
      minutes %= 60;
      hours %= 24;
  
      return message
        .channel.send({ content: `Uptime: ${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds`})
        .then(msg => { setTimeout(() => msg.delete(), 6 * 1000)}).catch(console.error);
    }
  };