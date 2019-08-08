//#Socket.io
//const SOCKET_IO_PORT = 80;
const io = require('socket.io')(2019);

io.sockets.emit('message', 'You are connected!');