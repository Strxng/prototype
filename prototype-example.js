// Classe Chat (protótipo)
class Chat {
  constructor(location) {
    this.location = location;
  }

  sendMessage(message) {
    console.log(`[${this.location}] ${message}`);
  }

  clone() {
    // Cria uma nova instância do chat clonando o protótipo
    return new Chat(this.location);
  }
}

// Criando o protótipo do chat
const chatPrototype = new Chat('Global');

// Criando uma instância do chat global
const globalChat = chatPrototype.clone();

// Enviando uma mensagem no chat global
globalChat.sendMessage('Olá, mundo!');

// Criando uma instância do chat local
const localChat = chatPrototype.clone();
localChat.location = 'Local';

// Enviando uma mensagem no chat local
localChat.sendMessage('Olá, pessoal do local!');
