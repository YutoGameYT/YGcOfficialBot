module.exports = {
    name: "guns",
    description: "You Can GACHAGACHA xD",
    execute(message, args, client, Discord) {
        const array = ["銃が出てきた\n\nポンプショットガン","YGガチャ\n\nアサルトライフル！:gun:","銃が出てきた\n\nサブマシンガン","銃が出てきた\n\nスナイパーライフル","銃が出てきた\n\nロケラン:boom:"];
            message.reply(array[Math.floor(Math.random() * array.length)]);
            console.log(message.guild.name + "\n" + message.author.username + "\n" + array[Math.floor(Math.random() * array.length)]);
    }
}