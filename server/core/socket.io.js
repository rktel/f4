//#Socket.io
//const SOCKET_IO_PORT = 80;
const io = require('socket.io')();

io.sockets.emit('message', 'You are connected!');