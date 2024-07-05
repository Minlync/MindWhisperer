import React, { useState } from 'react';
import axios from 'axios';
import '../css/chatbot.css';
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    const response = await axios.post('http://localhost:8080/api/chat', { message: input });
    const botMessage = { sender: 'bot', text: response.data.reply };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
