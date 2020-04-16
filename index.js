// Copyright (c) 2020 Azura Apple. All rights reserved. MIT license.

// Packages:
require('dotenv').config(); // Make sure to create a .env file!!
const Discord = require('discord.js');

// Our client - can be changed to bot or anything you'd like.
const client = new Discord.Client(); 

// Constant Variables
let prefix = process.env.PREFIX; // Don't forget to create a .env file!

// Message event 
client.on('message', message => {

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Return Statements
    if (message.author.bot) return; 
    if (!message.content.startsWith(prefix)) return; 

    // Command Handler
    try {

        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(client, message, args); 

    } catch (e) {
        console.log(e.stack);
    }

});

// Ready Event - Bot online / Bot started
client.on('ready', () => console.log('Bot Launched!'));
client.user.setActivity("STATUS_HERE", {
        type: "PLAYING", // You can also use watching or streaming
        //url: "https://www.twitch.tv/YOUR_CHANNEL" 
        // For streaming option
        });
});

// Discord Login
client.login(process.env.TOKEN); 
