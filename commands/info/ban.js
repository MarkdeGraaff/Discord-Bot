module.exports = {
    name : 'ban',
    run : async(client, message, args) => {
        if (!message.guild.me.hasPermission('ban_MEMBERS')) return message.channel.send('I do not have the permission');
        const Member = message.mentions.members.first()
        if (!Member) return message.channel,send('Please specify a member to kick!');

        await Member.ban({ reason : args.slice(1).join(" ")})

        message.channel.send(`${Member.user.tag} was kicked from the server!`)
        
    }
}