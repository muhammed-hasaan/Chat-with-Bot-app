const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const message = messageInput.value;
  addMessage('user', message);
  sendMessageToBot(message);
  messageInput.value = '';
});

function addMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  
  if (sender === 'user') {
    messageElement.classList.add('user-message');
    messageElement.innerHTML = message;
  } else {
    messageElement.classList.add('bot-message');
    messageElement.innerHTML = `Bot: ${message}`;
  }
  
  messageContainer.append(messageElement);
}

function sendMessageToBot(message) {
  // Use Ajax or fetch to send the message to the server and get a response
  // In this example, we will just respond with a random message
  const response = ['Hello!', 'How can I help?', 'Nice to meet you!', 'What are you up to today?'];
  const randomResponse = response[Math.floor(Math.random() * response.length)];
  setTimeout(() => { addMessage('bot', randomResponse); }, 1000);
}