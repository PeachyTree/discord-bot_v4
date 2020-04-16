// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

// 🍎🍌🍒🍓🍈

const {RichEmbed} = require('discord.js'); 

exports.run = (client, message, args) => {

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));

    if (slots[result1] === slots[result2] && slots[result3]) {
        
        let embed = new RichEmbed() 
            .setFooter('You won!', message.author.displayAvatarURL)
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(0xF4E842)
        message.channel.send({embed});

    } else {

        let embed = new RichEmbed()
            .setFooter('You lost!', message.author.displayAvatarURL)
            .setTitle(':slot_machine: Slots :slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor(0xF4E842)
        message.channel.send({embed});
    }
} 
