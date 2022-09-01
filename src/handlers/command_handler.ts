import { readdirSync } from 'fs';

export default (client:any) =>{
  
    const load_dir = (dirs:string) =>{
  const command_files = readdirSync(`./`).filter(file => file.endsWith('.ts'));

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