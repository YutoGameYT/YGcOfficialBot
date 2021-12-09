const config = require(`../datas/config.json`)
const pass = (config.loginpass)
const name = (config.name)

module.exports = {
    name: "login",
    description: "it is login command!",
    execute(message, args, client, Discord) {
        message.channel.bulkDelete(1)
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply('あなたに権限がありません: `ADMINSTRATOR`')
        if(!args[0]) return message.reply('パスワードを入力してください')
        if(!args[1]) return message.reply('実行するコマンドを入力してください')
        if(!args[0] === pass) return message.reply('パスワードが違います')
        if(!args[1] === 'gban') return message.reply('このコマンドは存在しません')
        if(args[0] === pass) {
            message.reply(`ログインに成功しました`)
            
            if(args[1] === 'gban') {
                const gbanid = args[2]
                const reason = args[3]

                message.channel.send("GBANを執行しています...");
                client.guilds.cache.forEach(g => {
                     g.members.ban(gbanid, {reason: `YGc公式Botが危険なユーザーをGBANしました。理由: ${reason}`});
                });

                
                client.channels.cache.filter(ch => ch.name == "ygcアナウンス").forEach(ch => {
                    const gbanembed = new Discord.MessageEmbed()
                    .setTitle(name + ' | GBAN')
                    .setDescription(`${name}が危険なユーザーをGBANしました。`)
                    .addField('ユーザー名', `<@!${gbanid}>`)
                    .addField('ユーザーID', gbanid)
                    .addField('理由', reason)

                    try {
                 ch.send({embeds: [gbanembed]})
                 } catch(err) {
                   message.channel.send("GBANお知らせ送信エラー: " + ch.guild.name + "でのGBANのお知らせの送信に失敗しました。\n");
                 }
                })
            }
                message.channel.send("執行が完了しました。")
           }  
      }
    }