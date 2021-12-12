const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: "members",
    description: "show members",
    execute(message, args, client, Discord) {
        const members = new Discord.MessageEmbed()
            .setTitle(`${name}が参加しているサーバーの合計メンバー数`)
            .setDescription(`合計メンバー数は${client.guilds.cache.map(guild => guild.memberCount).reduce((p, c) => p + c)}です！`)
            .setColor('RANDOM')
            .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
            .setTimestamp()
        message.reply({ embeds: [members] })
    }
}