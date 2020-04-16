// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

const {RichEmbed} = require('discord.js');

exports.run = (client, message, args) => {
    
    let item = message.content.split(/\s+/g).slice(1).join(" ");  

    let rock2 = ['Paper! I win!', 'Scissors! You win!']
    let rock1 = Math.floor(Math.random() * rock2.length);

    let paper2 = ['Rock! You win!', 'Scissors! I win!']
    let paper1 = Math.floor(Math.random() * paper2.length);

    let scissors2 = ['Rock! I win', 'Paper! You win!']
    let scissors1 = Math.floor(Math.random() * scissors2.length);

let rock = new RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x6B5858)
    .addField('You choose', `${args[0]}`)
    .addField('I choose', rock2[rock1])

let paper = new RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x6B5858)
    .addField('You choose', `${args[0]}`)
    .addField('I choose', paper2[paper1])

let scissors = new RichEmbed()
    .setAuthor('Rock, Paper, Scissors')
    .setColor(0x6B5858)
    .addField('You choose', `${args[0]}`)
    .addField('I choose', scissors2[scissors1])

if (item.toUpperCase().startsWith("-RPS ROCK")) return message.channel.send(rock);
if (item.toUpperCase().startsWith("-RPS PAPER")) return message.channel.send(paper);
if (item.toUpperCase().startsWith("-RPS SCISSORS")) return message.channel.send(scissors);

if (item.toUpperCase().startsWith("-RPS")) return message.channel.send('Options: ``Rock``, ``Paper``, ``Scissors``.\n**Usage: -rps <option>**')

} 
