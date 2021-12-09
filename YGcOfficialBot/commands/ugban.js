const config = require('../datas/config.json')
const name = (config.name)

module.exports = {
    name: "ugban",
    description: "gban sinsei",
    execute(message, args, client, Discord) {
        if (message.mentions.members.size !== 1) return message.reply('GBANを執行する人をメンションしてください');
        if (!args[1]) return message.reply('理由を入力してください\ny.gban [@メンション] [理由]')
        const targetUser = message.mentions.users.first();

        const embed = new Discord.MessageEmbed()
            .setTitle('GBAN申請の送信に成功しました')
            .setDescription('GBAN申請の送信が正常に完了しました')
            .addField('ユーザーID', targetUser.id)
            .addField('ユーザー名', `<@!${targetUser.id}>`)
            .addField('理由', args[1])
            .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
            .setTimestamp()
        message.reply({ embeds: [embed] })

        const logembed = new Discord.MessageEmbed()
        .setTitle('GBAN申請が届きました')
        .setDescription('確認してください')
        .addField('申請者名', `<@!${message.author.id}>`)
        .addField('申請者ID', message.author.id)
        .addField('申請サーバー', message.guild.name)
        .addField('ユーザーID', targetUser.id)
        .addField('ユーザー名', `<@!${targetUser.id}>`)
        .addField('理由', args[1])
        .setAuthor(name, "https://cdn.discordapp.com/avatars/906694531498520596/1c8faa8d0b4bbba0309e719f99561f95.png")
        .setTimestamp()
    	client.channels.cache.get('YOUR CHANNEL HERE').send({ embeds: [logembed] })
   
   
    }
}