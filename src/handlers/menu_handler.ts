import { readdirSync } from 'fs';
export default (client:any) =>{

  const command_files = readdirSync(`./src/selectmenus`).filter(file => file.endsWith('.ts'));

  for(const file of command_files){
    const menu = require(`../selectmenus/${file}`);
    if(menu.name){
      client.menus.set(menu.name, menu);
    }
  }
  }