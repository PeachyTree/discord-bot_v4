/* const Discord = require('discord.js'); // For forming & sending embeds
const fs = require('fs'); // Already included in the discord.js package

// Command Handler
exports.run = async (client, message, args) => {

  // Checking if user has permission
  if (!message.member.hasPermission('MANAGE_SERVER')) return message.reply('You don\' hsve permissions to use this command!');
  if (!args[0] || args[0] == 'help') return message.reply('Usage: -prefix <desired prefix here>');

  let prefixes = JSON.parse(fs.readFileSync('./prefixes.json', 'utf8'));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile('./prefixes.json', JSON.stringify(prefixes), (err) => {
    if (err) console.log(err) // This writes all chnages to the json
  });

  // Forming the embed
  let embed = new Discord.RichEmbed() // Use MessageEmbed() if you are on master
    .setColor('RANDOM') // You can of course change This
    .setTitle('Prefix set!')
    .setDescription(`Set to ${args[0]}`);

  message.channel.send(embed); // Sends the embed

} // Now, lets test it! */
