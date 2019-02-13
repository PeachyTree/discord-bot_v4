// The command will be activated using -ping, since the filename is ping & our prefix is -

exports.run = (client, message, args) => {

    // This sends a message to the channel, containing the string 'Pong!'
    message.channel.send('Pong!');

} // Now, let's test it out! - To start the bot type node index.js in terminal, & don't forget to save the file.