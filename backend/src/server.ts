import express from 'express';
import http from 'http';
import io from 'socket.io';

const app = express();
const server = http.createServer(app);
const sockets = io(server);

interface Message {
  user: string;
  messageText: string;
}

app.use(express.json());

const messages: Message[] = [];

sockets.on('connection', socket => {
  console.log(`Socket: ${socket.id} connected`);

  socket.on('sendMessage', (data: Message) => {
    messages.push(data);
    socket.broadcast.emit('receivedMessage', data);
  });

  socket.on('fullMessageBoard', () => {
    socket.emit('allMessages', messages);
  });

  socket.on('disconnect', () => {
    console.log(`Socket: ${socket.id} disconnected`);
  });
});

server.listen(3332, () => {
  console.log('Chat Server is up and running on port: 3332');
});
