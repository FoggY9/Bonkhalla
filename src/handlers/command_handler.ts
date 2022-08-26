import { readdirSync } from 'fs';

export default (client:any) =>{
  
    const load_dir = (dirs:string) =>{
  const command_files = readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

  for(const file of command_files){
    const command = require(`../commands/${dirs}/${file}`);
    if(command.info.name){
      client.commands.set(command.info.name, command);
    }else {
      continue;
    }
  }
  }
  ['assignClanRole', 'removeClanRole','utility'].forEach(e => load_dir(e));
}