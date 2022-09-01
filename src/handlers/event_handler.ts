import { readdirSync } from 'fs';

export default (client:any) =>{

    const event_files = readdirSync(`./src/events`).filter(file => file.endsWith('.ts'));

    for(const file of event_files){
      const events = require(`../events/${file}`);
      const event_name = file.split('.')[0];
      client.on(event_name, events.default.bind(null, client));
    }
}