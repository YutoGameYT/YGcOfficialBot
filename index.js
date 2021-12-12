const http = require('http');
http.createServer(function (req, res) {
  res.write("YGcBot is online!");
  res.end();
}).listen(8080);

const { Client, Intents } = require('discord.js')
const Discord = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
const fs = require('fs')
const config = require(`./datas/config.json`)
const prefix = (config.prefix)


    console.log(`\n\n\n\n\n\n\n\n\n\n\n\n┌Discord bot is ready!`);
    console.log(`├Logged by ${config.name}`);
    console.log(`├──────Config──────┐`)
    console.log(`├Token: ${config.token}`)
    console.log(`├Prefix: ${config.prefix}`)
    console.log(`├Version: ${config.ver}`)
    console.log(`├Subscriber: ${config.subscriber}`)
    console.log(`├Owner Name: ${config.ownername}`)
    console.log(`├Github: ${config.github}`)
    console.log(`├Name: ${config.name}`)
    console.log(`├Pass: ${config.loginpass}`)
    console.log(`├─────files────────┤`)



client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

let command_int = 0
for (const file of commandFiles) {
	command_int++;
	const command = require(`./commands/${file}`);
	console.log(`├${file} がロードされました。`)
	client.commands.set(command.name, command);
}
console.log('└──────────────────┘')


client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args, client, Discord);
    }else if(command === 'info') {
        client.commands.get('info').execute(message, args, client, Discord);
    }else if(command === 'members') {
        client.commands.get('members').execute(message, args, client, Discord);
    }else if(command === 'servers') {
        client.commands.get('servers').execute(message, args, client, Discord);
    }else if(command === 'guns') {
        client.commands.get('guns').execute(message, args, client, Discord);
    }else if(command === 'avator') {
        client.commands.get('avator').execute(message, args, client, Discord);
    }else if(command === 'website') {
        client.commands.get('website').execute(message, args, client, Discord);
    }else if(command === 'guns') {
        client.commands.get('guns').execute(message, args, client, Discord);
    }else if(command === 'coin') {
        client.commands.get('coin').execute(message, args, client, Discord);
    }else if(command === 'help') {
        client.commands.get('help').execute(message, args, client, Discord);
    }else if(command === 'mute'){
        client.commands.get('mute').execute(message, args, client, Discord)
    }else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args, client, Discord)
    }else if(command === 'role'){
        client.commands.get('role').execute(message, args, client, Discord)
    } else if(command === 'poll'){
        client.commands.get('poll').execute(message, args, client, Discord)
    } else if(command === 'gban'){
        client.commands.get('ugban').execute(message, args, client, Discord)
    } else if(command === 'login'){
        client.commands.get('login').execute(message, args, client, Discord)
    } else {
        client.commands.get('nocommand').execute(message, args, client, Discord)
    }
})

client.on('messageCreate', message => {
    if (message.attachments.size && !message.author.bot) {
      const files = message.attachments.map(attachment => attachment.url)
      message.channel.send({ files })
    }
})



client.on('messageCreate', async message => {
    if(message.author.bot) return;
    if(message.content.match(/yaうユ|YAうユ|yauyu|yaうゆ|YAうゆ|YAUYU|YAウユ|yaウユ|やうゆ|ヤウユ|やうユ|やウゆ/)) {
        message.reply('天才')
    }
})


client.login(config.token)