// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

const {RichEmbed} = require('discord.js');

exports.run = async (client, message, args) => {

  let quiz = [
    { q: 'What color is the sky?', a: ['no color', 'invisible'] },
    { q: 'Name a soft drink brand.', a: ['pepsi', 'coke', 'rc', '7up', 'sprite', 'mountain dew'] },
    { q: 'Name a programming language.', a: ['actionscript', 'coffescript', 'c', 'c++', 'c#', 'visual basic', 'perl', 'javascript', 'dotnet', 'crystal', 'lua', 'go', 'python', 'rust', 'ruby', 'java'] },
  ]; // You can of course add more questions and answers. There is no limit!
  let options = {
    max: 1,
    time: 30050, // 30050 = 30 seconds and a half ms, you can change this if you'd like.
    errors: ['time'],
  };

  let item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    let winnerMessage = collected.first();
    
    return message.channel.send({embed: new RichEmbed()
                                  .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                  .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor('RANDOM') // Change this if you want to.
                                })

  } catch (_) {
    return message.channel.send({embed: new RichEmbed()
                                  .setAuthor('No one got the answer in time!')
                                  .setTitle(`Correct Answer(s): \`${item.a}\``)
                                  .setFooter(`Question: ${item.q}`)
                                  .setColor('RANDOM') // Change this if you want to.
                                })

  }

} 
