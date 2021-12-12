const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: 'servers',
    description: "This is checked servers!",
    execute(message, args, client, Discord){
        const server = new Discord.MessageEmbed()
        .setTitle(name + "が参加しているサーバー数")
        .setDescription(`現在参加しているサーバーは\`${client.guilds.cache.size}\`です！`)
        .setColor("#ff5252")
        .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
        .setTimestamp()
        message.reply({ embeds: [server] });
    }
}