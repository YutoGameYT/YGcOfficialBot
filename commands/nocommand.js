const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: "nocommand",
    description: "Command Not found!",
    execute(message, args, client, Discord){
        const noc = new Discord.MessageEmbed()
            .setTitle("πγ³γγ³γγθ¦γ€γγγΎγγ")
            .setDescription("`y.help`γ¨ε₯εγγ¦γγ«γγθ‘¨η€ΊγγΎγ")
            .setColor("#ff5252")
            .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
            .setTimestamp()
            message.reply({ embeds: [noc] });
    }
}