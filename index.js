// Let's start coding the bot
// Require Packages
const Discord = require('discord.js');
const client = new Discord.Client(); // This uses the discord.js package, in order to setup a client

// Constant Variables
let prefix = '-'; // This can be changed to aynthing else

// Listener Events
client.on('message', message => {
    // This runs whenever a message is received

    // Variables
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    // Now, we have two variables. - cmd contains the command following the prefix
    // args contains everything following that and splits it into an array by slices

    // Return Statements
    if (message.author.bot) return; // This will ignore all bots
    if (!message.content.startsWith(prefix)) return; // This will run if the message doesn't starts with the prefix

    // Command Handler
    try {

        let commandFile = require(`./commands/${cmd}.js`); // This will require a file in the commands folder
        commandFile.run(client, message, args); // This will pass three variables into the file

        // We can now create a basic ping-pong command for the start.

    } catch (e) {
        console.log(e.stack);
    }

});

// Ready Event - Bot online / Bot started
client.on('ready', () => console.log('Bot Launched!'));

// Discord Login - Remember to use your own token, and to NEVER leak it.
//#region Token - Ignore this.  This only hides my token.
client.login('NTM5ODA3MjI3NzcxNDg2MjE4.DzHuNg.lGrxhW2CE1GD_S5qY0d-0y2t54A'); // This will be your token instead of TOKEN
//#endregion Token
