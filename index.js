const players = [];
const messageLog = [];

function setup() {
  for (let i = 1; i < 5; i++) {
    const newPlayer = new Player(i);
    players.push(newPlayer);
    // console.log(newPlayer);
  }
}
setup();

function handleMessage(num) {
  // console.log(`handle message fired for player ${num}`);
  const recipientSource = document.getElementById(`recipient${num}`);
  const messageSource = document.getElementById(`text${num}`);
  const recipient = parseInt(recipientSource.value);
  const message = messageSource.value;
  players[num-1].sendMessage(recipient, message);
  messageSource.value = '';
  console.log(messageSource.value);
  recipientSource.value = '';
  console.log(recipientSource.value);
}
