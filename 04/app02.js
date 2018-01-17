const fs = require('fs');


const options = {
    encoding:'utf8',
    highWaterMark:200
};

const readStream = fs.createReadStream('./data_files/lorem.txt',options);
const writeStream = fs.createWriteStream('./data_files/lorem-ws.txt');


readStream.pipe(writeStream);

readStream.on('data',(chunk)=>{
    console.log(`chunk readed`);
    readStream.pause();
    setTimeout(()=>{
        readStream.resume();
    },10000);
});

readStream.on('end',()=>{
    process.stdout.write(`\nReading finished:${readStream.bytesRead}\n`);
});

writeStream.on('close',()=>{
    process.stdout.write(`\nWritting finished:${writeStream.bytesWritten}\n`);
});

