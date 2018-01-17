const net = require('net');

const readline = require('readline')
                    .createInterface(process.stdin,process.stdout);

const client = new net.Socket();

client.setEncoding('utf8');

readline.question('User Name:', (username)=>{
    client.connect(3000, '192.168.1.103', ()=>{
        client.write(username);

        readline.setPrompt('<<');

        readline.on('line', (line)=>{
            if(line === 'quit'){
                client.end();
                readline.close();
                return;
            }

            readline.prompt();
            client.write(line);
        });//on read line
    });//connect
});//question username

client.on('data', (buffer)=>{
    process.stdout.write(`>>${buffer.toString('utf8')}`);
});

client.on('close', ()=>{
    process.stdout.write(`\nconnection closed!\n`);
});
