module.exports = {
    name: "coin",
    description: "coin game command!",
    execute(message, args, client, Discord) {
        const array = ["๐่กจ๏ผใใใฆ๏ผ", "๐ฟ่ฃ(ใใ)"];
        message.reply(array[Math.floor(Math.random() * array.length)]);
        console.log(message.guild.name + "\n" + message.author.username + "\n" + array[Math.floor(Math.random() * array.length)]);
    }
}