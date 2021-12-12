const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: "poll",
    description: "A simple poll command",
    execute(message, args, client, Discord) {
        const embed = new Discord.MessageEmbed()
            .setColor('0xFFC300')
            .setTitle('SIMPLE POLL HELP')
            .setDescription('y.poll でシンプルな投票を作成できます')
            .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
            .setTimestamp()

            if(!args[0]) {
                message.reply({ embeds: [embed] })
            }

            if(args[0]) {
                const pollemb = new Discord.MessageEmbed()
                .setColor('0xFFC300')
                .setTitle(`投票 / ${message.author.username}`)
                .setDescription('リアクションで投票してください')
                .addField('概要', args[0])
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
                    message.channel.send({ embeds: [pollemb] })
            }
    }

}