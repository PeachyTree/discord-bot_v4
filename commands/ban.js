// For the ban command we require 1 package, make sure to install it.
// Today, we are going to update this command to work again.
const Discord = require('discord.js');

// Command Handler
exports.run = async (client, message, args) => {

// Check if user has permission to ban a user
  message.delete(); // Deletes this message so it can't be seen for anyone else
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('You do not have permission to use this.');
  if (args[0] == 'help') {
    message.reply('Usage: -ban <user> <reason>');
    return;
  }


  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send('Can\'t find user.');
  if (bUser.id === client.user.id) return message.channel.send('Botuser');
  let bReason = args.join(" ").slice(22);
  if (!bReason) return message.channel.send('No reason entered.');
  if (bUser.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permission to use this');

  let embed = new Discord.RichEmbed()
    .setDescription('Ban')
    .setColor(0xBC0000)
    .addField('Banned User', `${bUser} with the ID ${bUser.id}`)
    .addField('Banned by', `<@${message.author.id}> with the ID ${message.author.id}`)
    .addField('Banned in', message.channel)
    .addField('Time', message.createdAt)
    .addField('Reason', bReason)

  // OPTIONAL Sending the ban embed into a specific channel
  let memberlog = message.guild.channels.find(`name`, 'member-log');
  if (!memberlog) return message.channel.send('Can not find member-log channel.  Please create one.');

  message.guild.member(bUser).ban(bReason);
  memberlog.send(embed);

} // Now, we can test it!
