// For the 8ball command we require 1 package
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

    // We will be fixing the question part for this command & improve it
        let question = message.content.split(/\s+/g).slice(1).join(" ");

        if (!question) {
            return message.channel.send('You must provide a question! **Usage: -8ball <question>**');

        }

    var answer = ['It is certain',
                                    'It is decidedly so',
                                    'Without a doubt',
                                    'Yes, definitely',
                                    'You may rely on it',
                                    'As I see it, yes',
                                    'Most likely',
                                    'Outlook good',
                                    'Yes',
                                    'Signs point to yes',
                                    'Reply hazy try again',
                                    'Ask again later',
                                    'Better not tell you now',
                                    'Cannot predict now',
                                    'Concentrate and ask again',
                                    'Don\'t count on it',
                                    'My reply is no',
                                    'My sources say no',
                                    'Outlook not so good',
                                    'Very doubtful'];
                  // Make sure to delete this - We are going to form a better embed
            const ballEmbed = new Discord.RichEmbed()
                .setAuthor(question)
                .setDescription(answer[Math.round(Math.random() * (answer.length - 1))] + '.')
                .setColor(0x646770);
            message.channel.send(ballEmbed); // Let's test it now! - Hope it's working correctly.
}