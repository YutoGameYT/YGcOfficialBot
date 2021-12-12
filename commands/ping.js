const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: 'ping',
    description: 'this is a ping command!',
    execute(message, args, client, Discord) {
        const pong = new Discord.MessageEmbed()
            .setTitle('🏓Pong!')
            .setDescription(`現在のPingは${client.ws.ping}です!`)
            .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
            .setTimestamp()
        message.reply({ embeds: [pong] })
    }
}