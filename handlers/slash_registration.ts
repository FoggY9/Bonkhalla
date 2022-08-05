import { Constants } from 'discord.js';
export default (client:any) =>{

    let guild = client.guilds.cache.get('747565321745072359');
    let commands;
    if (guild) {
        commands = guild.commands

    }else{
    commands = client.application.commands
    }
    commands.create({
        name: 'say',
        description: 'say something',
        options: [
            {
             name: 'content',
             description: 'give your text here',
             required: true,
             type:  Constants.ApplicationCommandOptionTypes.STRING
            }]
    ,
    })
    commands.create({
        name: 'help',
        description: 'get info of this bot and its commands'
    })
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
                {name: 'Bad 2v2 Players', value: 'Bad 2v2 Players'}
            ],
            required: true,
            type: Constants.ApplicationCommandOptionTypes.STRING
        },
    {
            name: 'target-member',
            description: 'the member you want to give',
            required: true,
            type: Constants.ApplicationCommandOptionTypes.USER
    }
    ]
    })
    commands.create({
        name: 'remove',
        description: 'remove clan role',
        options: [
            {
            name: 'clan-name',
            description: 'the clan role you want to remove',
            choices:[
                {name: 'Azure Spirit', value: 'Azure Spirit'}, 
                {name: '7t1 Bangladesh', value: '7t1 Bangladesh'},
                {name: 'Bedroom Community', value: 'Bedroom Community'},
                {name: 'Persistence', value: 'Persistence'},
                {name: 'Five Finger N Extra', value: 'Five Finger N Extra'},
                {name: 'Strawberry Field', value: 'Strawberry Field'},
                {name: 'Khudarto', value: 'Khudarto'},
                {name: 'Bad 2v2 Players', value: 'Bad 2v2 Players'}
            ],
            required: true,
            type: Constants.ApplicationCommandOptionTypes.STRING
        },
    {
            name: 'target-member',
            description: 'the member you want to remove',
            required: true,
            type: Constants.ApplicationCommandOptionTypes.USER
    }
    ]
    })
    commands.create({
        name: 'leaveclan',
        description: 'remove all clan roles'
    })
    commands.create({
        name: 'claninfo',
        description: 'view clan details',
        options: [
            {
            name: 'clan-name',
            description: 'the clan role you want to give',
            choices:[
                {name: 'Azure Spirit', value: 'azu'}, 
                {name: '7t1 Bangladesh', value: '7t1'},
                {name: 'Bedroom Community', value: 'bed'},
                {name: 'Persistence', value: 'per'},
                {name: 'Five Finger N Extra', value: 'fiv'},
                {name: 'Strawberry Field', value: 'str'},
                {name: 'Khudarto', value: 'khu'},
                {name: 'Bad 2v2 Players', value: 'bad'}
            ],
            required: true,
            type: Constants.ApplicationCommandOptionTypes.STRING
        }
    ]
    })

}