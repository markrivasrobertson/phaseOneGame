// console.log('whippee');
// setup();
const players = [];
const messageLog = [];

class Player {
  constructor(num) {
    this.playerNumber = num;
    console.log('player constructor');
  }
  sendMessage(rec, txt) {
    const newMessage = new Message(this.playerNumber, rec, txt);
    console.log(newMessage);
    messageLog.push(newMessage);
  }
}
class Message {
  constructor(sender, receiver, text) {
    this.sender = sender;
    this.receiver = receiver;
    this.text = text;
  }
}
function setup() {
  for (let i = 1; i < 5; i++) {
    const newPlayer = new Player(i);
    players.push(newPlayer);
    console.log(newPlayer);
  }
}
setup();
