exports.run = (client, message, args) => {
    const ping = Math.round(client.ping); // Pega no ping do bot e arredonda, de modo a deixar o ping mais compreensível.
    message.channel.send(`Pong! (${ping} ms)`);
}
