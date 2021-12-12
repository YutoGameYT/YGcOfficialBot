const config = require('../datas/config.json')
const ver = (config.ver)
const subscriber = (config.subscriber)
const week = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear();
const month = date.getMonth();
const dd = date.getDate();
const day = date.getDay();
const time = year + '年' + (month + 1) + '月' + dd + '日' + '(' + week[day] + ')';
const name = (config.name)

module.exports = {
    name: 'info',
    description: "this is a say version command!",
    execute(message, args, client, Discord){
        if(args[0] === 'version') {
            const version = new Discord.MessageEmbed()
                .setTitle('Version')
                .addField(name, `Version ${ver}`)
                .setColor('00cc99')
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [version] })
        } else if(args[0] === 'owner') {
            const owner = new Discord.MessageEmbed()
                .setTitle('Owner')
                .setURL('https://www.youtube.com/channel/UC3QNIvHVZMfyk9YhJjqlXqQ?view_as=subscriber')
                .setDescription('情報')
                .addField('名前', config.ownername)
                .addField('年齢', '4才')
                .addField('登録者数', subscriber)
                .addField('Discordサーバー', 'https://discord.gg/JJ6zASh4gk')
                .setColor('00cc99')
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [owner] })
        } else if(args[0] === 'date') {
            message.reply(`今日は\`${time}\`です`)
        }else if(args[0] === 'invite') {
            const invite = new Discord.MessageEmbed()
                message.reply('')
        }else if(args[0] === 'servers') {
            const server = new Discord.MessageEmbed()
                .setTitle(name + "が参加しているサーバー数")
                .setDescription(`現在参加しているサーバーは\`${client.guilds.cache.size}\`です！`)
                .setColor('00cc99')
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [server] })
        } else {
            const helpe = new Discord.MessageEmbed()
                .setTitle('HELP INFO COMMAND')
                .addField('version', 'バージョンを表示します')
                .addField('owner', '作成者を表示します')
                .addField('date', '今の日付を表示します')
                .addField('invite', "招待リンクを表示します")
                .addField('servers', name + 'が参加しているサーバー数を表示します')
                .setColor('00cc99')
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
            message.reply({ embeds: [helpe] })
        }
    }
}