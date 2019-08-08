//#Socket.io
//const SOCKET_IO_PORT = 80;
const io = require('socket.io');
const serverio = io.listen(8000);

serverio.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    socket.emit('message', 'hello from server');
});