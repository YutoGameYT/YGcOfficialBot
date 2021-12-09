const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: "help",
    description: "This is help command",
    execute(message, args, client, Discord) {
        const helpe = new Discord.MessageEmbed()
                .setTitle('HELP')
                .setURL('https://www.github.com')
                .setDescription(name + 'はサーバーを便利にしたい。という気持ちから生まれた開発中の多機能Botです。\n開発中なので追加されたり消されたりするコマンドもあるかもしれないです。\n\n')
                .addField('📂General', '\`avator\`\ny.avator [Usermention]\n\n\`coin\`\nコインゲームができるよ\n\n\`guns\`\nランダムで銃が出てきます。これでゲームの縛りとかできそう？\n\n\`info\`\n概要を表示できます\n\n\`website\`\n開発者のYouTubeを表示します\n\n\n\n')
                .addField('🔧Moderation', '\`help`\nヘルプを表示します\n\n\`members\`\nBotが参加している全サーバーの合計メンバー数を表示します\n\n\`servers\`\nBotが参加している全サーバーの合計を表示します\n\n')
                .setColor('00cc99')
                .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
                .setTimestamp()
        message.reply({ embeds: [helpe] })
    }
}