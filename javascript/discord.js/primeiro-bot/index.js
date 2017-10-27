const { Client } = require("discord.js"); // Mesma coisa de `require("discord.js").Client`
const client = new Client(); // Cria um novo client

client.on('ready', () => { // Quando o bot estiver pronto
  console.log(`Logado como ${client.user.tag}!`); // Quando o bot iniciar irá mandar a seguinte mensagem no console: "Logado como <nome do bot>!"
});

client.on('message', msg => { // Quando o bot receber uma mensagem
  if(message.content.startsWith("++ping")) { // Se a mensagem começar com "++ping", o bot responde com "Pong!".
    message.reply("Pong!");
  }
});

client.login('TOKEN'); // Isto faz com que se bot inicie usando a token que está disponível na página do Discord Developers
