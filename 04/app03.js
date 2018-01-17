const net = require('net');

const server = net.createServer((socket)=>{
    process.stdout.write(`Conn from ${socket.remoteAddress}:${socket.remotePort}`);

    socket.on('data', (buffer)=>{
        process.stdout.write(`\nReceived:${buffer.length} Bytes\n`);

        console.log(buffer);
        if( buffer.toString('utf8') === 'quit\n'){
            socket.end();
            return;
        }
        socket.write('Hello');
    });//socket on data 


    socket.on('end', ()=>{
        process
            .stdout
            .write(`\n${socket.remoteAddress}:${socket.remotePort} disconnect\n`);
    });

    socket.on('close',()=>{
        process.stdout.write('\nconnection closed!\n');
    });
});//create server


const options = {
    host:'127.0.0.1',
    port:3000
};

server.listen(options,()=>{
    process.stdout.write(`Listen on ${options.host}:${options.port}`);
});
