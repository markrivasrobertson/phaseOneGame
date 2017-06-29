class Player {
  constructor(num) {
    this.playerNumber = num;
    // console.log('player constructor');
  }
  sendMessage(rec, txt) {
    const newMessage = new Message(this.playerNumber, rec, txt);
    console.log(newMessage);
    messageLog.push(newMessage);
  }
}
