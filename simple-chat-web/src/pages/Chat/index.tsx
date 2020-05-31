import React, { useEffect, useState, FormEvent } from 'react';
import io from 'socket.io-client';

import { Container, ChatRoom, ChatInput } from './styles';

interface Message {
  user: string;
  messageText: string;
}

const socket = io('http://localhost:3332');

const Chat: React.FC = () => {
  const [user, setUser] = useState('');
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (messages.length === 0) {
      socket.emit('fullMessageBoard');
      socket.on('allMessages', (reqMessages: Message[]) => {
        setMessages(reqMessages);
      });
    }
    socket.on('receivedMessage', (receivedMessage: Message) => {
      const newMessageList = [...messages, receivedMessage];
      setMessages(newMessageList);
    });
  }, [messages]);

  async function handleSendMessage(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (user.length && messageText.length) {
      const messageObject = {
        user,
        messageText,
      };

      setMessages([...messages, messageObject]);

      socket.emit('sendMessage', messageObject);
    }
  }

  return (
    <Container>
      <ChatRoom>
        {messages.map((message) => (
          <p>
            <span>{message.user} </span> {message.messageText}
          </p>
        ))}
      </ChatRoom>

      <ChatInput>
        <form onSubmit={handleSendMessage}>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Username"
          />

          <input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="Message"
          />

          <button type="submit">Send</button>
        </form>
      </ChatInput>
    </Container>
  );
};

export default Chat;
