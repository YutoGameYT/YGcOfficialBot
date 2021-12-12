module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args, client, Discord){
        if (!message.member.permissions.has('MANAGE_ROLES')) message.reply('You don\'t have Permission!')
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.reply(`<@${memberTarget.user.id}> has been unmuted`);
        } else {
            message.reply('Cant find that member!');
        }
    }
}