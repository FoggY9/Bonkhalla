const { joinVoiceChannel } = require('@discordjs/voice');
const DiscordJs = require('discord.js');
module.exports = async(client) => {
    // When Ready
    console.log('BBO bot is Online!');
    
    client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"});
    
    joinvc();

async function joinvc(){
let channel = client.channels.cache.get('751266537645801663')
var guild = client.guilds.cache.get('747565321745072359')
        await joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        })
    }

    // CHECK if any temp vc is active
function checkvcs() {
    client.guilds.cache.get('747565321745072359').channels.cache.forEach(cnl => {

        if (cnl.name == 'Custom Lobby' || cnl.name == '2v2 Lobby' || cnl.name == '1v1 Lobby') {
     if (cnl.members.size < 1) { 
            return cnl.delete().catch(err => console.log(err)); 
       }}
     });
}
checkvcs();
setInterval(checkvcs, 10000);
 


    slashpanel();
    function slashpanel() {
    let guild = client.guilds.cache.get('747565321745072359');
    let commands;
    if (guild) {
        commands = guild.commands

    }else{
    commands = client.application.commands
    }

    commands.create({
        name: 'add',
        description: 'give clan role',
        options: [
            {
            name: 'clan-name',
            description: 'the clan role you want to give',
            choices:[
                {name: 'Azure Spirit', value: 'Azure Spirit'}, 
                {name: '7t1 Bangladesh', value: '7t1 Bangladesh'},
                {name: 'Bedroom Community', value: 'Bedroom Community'},
                {name: 'Persistence', value: 'Persistence'},
                {name: 'Five Finger N Extra', value: 'Five Finger N Extra'},
                {name: 'Strawberry Field', value: 'Strawberry Field'},
                {name: 'Khudarto', value: 'Khudarto'},
            ],
            required: true,
            type: DiscordJs.Constants.ApplicationCommandOptionTypes.STRING
        },
    {
            name: 'target-member',
            description: 'the member you want to give',
            required: true,
            type: DiscordJs.Constants.ApplicationCommandOptionTypes.USER
    }
    ]
    })
        }
 
    }