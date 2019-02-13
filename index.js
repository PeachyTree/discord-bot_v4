// Require Packages
const Discord = require('discord.js');
const client = new Discord.Client(); 

// Constant Variables
let prefix = '-'; // This can be changed to aynthing else

// Listener Events
client.on('message', message => {

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Now, we have two variables. - cmd contains the command following the prefix
    // args contains everything following that and splits it into an array by slices

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

// Discord Login - Remember to use your own token, and to NEVER leak it.
client.login('TOKEN'); // This will be your token instead of TOKEN
