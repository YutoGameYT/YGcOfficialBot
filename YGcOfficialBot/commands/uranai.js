module.exports = {
    name: "uranai",
    description: "uranai dekiruyo",
    execute(message, args, client, Discord) {
        const omikuji = ["凶　えぇ、、、", "小吉　まあ、がんば", "中吉　普通で草", "吉 まぁまぁ。", "大吉　おめでと。"];
        message.reply(omikuji[Math.floor(Math.random() * omikuji.length)]);
        console.log(message.guild.name + "\n" + message.author.username + "\n" + omikuji[Math.floor(Math.random() * omikuji.length)]);
    }
}