const {spawn} = require('child_process');

const tail = spawn('tail', ['-f', './app07.js']);

tail.stdout.on('data', (data)=>{
    console.log('stdout:'+ data);
}); 

tail.stderr.on('data', (data)=>{
    console.log('stderr:'+ data);
});

tail.on('close', (code)=>{
    console.log(`Exit code:${code}`);
}) 