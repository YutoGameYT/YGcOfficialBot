module.exports = {
    name: "coin",
    description: "coin game command!",
    execute(message, args, client, Discord) {
        const array = ["📀表（おもて）", "💿裏(うら)"];
        message.reply(array[Math.floor(Math.random() * array.length)]);
        console.log(message.guild.name + "\n" + message.author.username + "\n" + array[Math.floor(Math.random() * array.length)]);
    }
}