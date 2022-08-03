const fs = require('fs');
module.exports = (client) =>{

  const command_files = fs.readdirSync(`./slashCommands`).filter(file => file.endsWith('.js'));

  for(const file of command_files){
    const slashcmd = require(`../slashCommands/${file}`);
    if(slashcmd.name){
      client.slashcmd.set(slashcmd.name, slashcmd);
    }
  }
  }