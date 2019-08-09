import http from 'http';
import socket_io from 'socket.io';

const PORT = 8080;

Meteor.startup(() => {
  // Server
  const server = http.createServer();
  const io = socket_io(server);

  let counter = 0;

  // New client
  io.on('connection', function(socket) {
    console.log('new socket client');
  });

  // Start server
  try {
    server.listen(PORT);
  } catch (e) {
    console.error(e);
  }
});


//#Socket.io
//const SOCKET_IO_PORT = 80;
/*
const io = require('socket.io');
const serverio = io.listen(8000);

serverio.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    socket.emit('message', main_getAllMobiles());

});
*/

