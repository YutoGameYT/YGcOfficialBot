const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: "avator",
    description: "avator search command",
    execute(message, args, client, Discord) {
        if(!args[0]) {
        const avator = new Discord.MessageEmbed()
                .setTitle(`${message.author.username}`)
                .setURL(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
                .setDescription(`${message.author.username}`)
                .setColor('00cc99')
                .setImage(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`)
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [avator] })
        } else if(args[0] === 'guild'){
            const serveravator = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name}`)
                .setURL(message.guild.iconURL())
                .setDescription(`${message.author.username}`)
                .setColor('00cc99')
                .setImage(message.guild.iconURL())
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [serveravator] })
        } else {
            const noc = new Discord.MessageEmbed()
                .setTitle("🙁コマンドの使用方法が間違っています")
                .setDescription("`y.avator server`または`y.avator`と入力して使用します")
                .setColor("#ff5252")
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [noc] });
        }
    }
}