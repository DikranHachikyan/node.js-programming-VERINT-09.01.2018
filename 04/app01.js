const fs = require('fs');


const options = {
    encoding:'utf8',
    highWaterMark:200
};

const readStream = fs.createReadStream('./data_files/lorem.txt',options);

readStream.on('data', (chunk)=>{
    process.stdout.write(`\n --chunk:${chunk.length} Bytes`);
    readStream.pause();
    setTimeout(()=>{
        readStream.resume();
    }, 2000);
});

readStream.on('end',()=>{
    process.stdout.write(`\nReading finished:${readStream.bytesRead}\n`);
});