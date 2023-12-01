// server.js
const io = require('socket.io')(4200);

io.on('connection', socket => {
    // Quando uma nova mensagem é enviada
    socket.on('send-message', message => {
        // Envia a mensagem para todos os outros clientes, exceto o remetente
        socket.broadcast.emit('receive-message', message);
    });
});
