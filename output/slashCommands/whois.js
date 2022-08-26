"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.name = void 0;
// Its an useless command, feel free to ignore
exports.name = 'whois';
const run = (client, interaction, options) => {
    let red = 'one of the frienliest admins in this server';
    let fog = 'an average introverted programmer';
    let fri = 'top level Chapabaaz ';
    let juj = 'a responsible mod with toxic behavior';
    let cry = 'a passive bull player [but he is friendly, unlike others]';
    const choosed = options._hoistedOptions[0].value;
    var target;
    if (choosed == 'red')
        target = red;
    else if (choosed == 'fog')
        target = fog;
    else if (choosed == 'fri')
        target = fri;
    else if (choosed == 'juj')
        target = juj;
    else if (choosed == 'cry')
        target = cry;
    interaction.reply({ content: target, ephemeral: true });
};
exports.run = run;
