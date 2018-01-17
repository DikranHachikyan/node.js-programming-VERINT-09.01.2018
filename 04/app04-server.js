const net = require('net');

const server = net.createServer();//create server

const sockets = [];

const options = {
    host:'192.168.1.103',
    port:3000
};

server.listen(options,()=>{
    process.stdout.write(`Listen on ${options.host}:${options.port}`);
});


server.on('connection',(socket)=>{
    process
        .stdout
        .write(`\nNew Conn:${socket.remoteAddress}:${socket.remotePort}`);

    sockets.push(socket);

    socket.once('data', (buffer)=>{
        socket.username = buffer.toString('utf8');
        sendMessage(socket, socket.username + ' joined the chat\n');

        socket.on('data', (buffer)=>{
            let message = buffer.toString('utf8');
            sendMessage(socket, socket.username + ' says:' +message);
        });
    });
    

    socket.on('end', ()=>{
        sockets.splice( sockets.indexOf(socket),1);
        sendMessage(socket, socket.username + ' left the chat\n');
    });
});//on connection

const sendMessage = (sender,message)=>{
    sockets.forEach( (socket)=>{
        if( sender === socket ) return;
        socket.write(message);
    });//for each socket
};