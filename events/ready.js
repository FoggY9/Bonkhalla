module.exports = async(client) => {
// When Ready
console.log('BBO test bot is Online!');

client.user.setActivity('Brawlhalla', { type: 'STREAMING', url: "https://www.twitch.tv/brawlhalla_bangladesh"});

}
