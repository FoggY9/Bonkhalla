import { readdirSync } from 'fs';
export default (client:any) =>{

  const command_files = readdirSync(`./slashCommands`).filter(file => file.endsWith('.js'));

  for(const file of command_files){
    const slashcmd = require(`../slashCommands/${file}`);
    if(slashcmd.name){
      client.slashcmd.set(slashcmd.name, slashcmd);
    }
  }
  }