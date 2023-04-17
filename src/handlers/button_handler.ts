import { readdirSync } from 'fs';
export default (client:any) =>{

  const command_files = readdirSync(`./src/buttons`).filter(file => file.endsWith('.ts'));

  for(const file of command_files){
    const button = require(`../buttons/${file}`);
    if(button.name){
      client.buttons.set(button.name, button);
    }
  }
  }