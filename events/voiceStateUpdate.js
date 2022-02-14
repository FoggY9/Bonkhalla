
module.exports = async(client, oldState, newState) => {

// Vc Id's   
const crt_custom_lobby = '942055598462222383';
const crt_2s_lobby =     '942055598713888818';
const crt_1s_lobby =     '942055598713888821';

// If Joins vc
if (oldState.channel !== newState.channel && oldState.channel === null) {
    if(newState.channel.id == crt_custom_lobby){createCustomVc();}
    else if(newState.channel.id == crt_2s_lobby){    create2sVc();}
    else if(newState.channel.id == crt_1s_lobby){    create1sVc();}
  }









function createCustomVc(){
    console.log('working');
}
function create2sVc(){
    console.log('working2');
}
function create1sVc(){
    console.log('working3');
}
}