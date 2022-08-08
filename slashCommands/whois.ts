
export const name = 'whois';
export const run = (client:any, interaction:any, options:any) => {
let red = 'one of the frienliest admins in this server'
let fog = 'an average introverted programmer'
let fri = 'Chapabaaz Gay'
let juj = 'a responsible mod with toxic behavior'
let cry = 'a passive bull player [but he is friendly, unlike others]'

const choosed = options._hoistedOptions.value
var target:string;
if (choosed == 'red') target = red
else if (choosed == 'fog') target = fog
else if (choosed == 'fri') target = fri
else if (choosed == 'juj') target = juj
else if (choosed == 'cry') target = cry

interaction.reply({content: target!, ephemeral: true})
}
