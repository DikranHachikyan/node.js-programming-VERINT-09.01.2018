const fs = require('fs');
const fileName = './data_files/lorem.txt';

//process.cwd();

fs.open(fileName,'r', (err,fd)=>{
    console.log(`fd:${fd}`);

    fs.stat(fileName, (err,stats)=>{
        //console.log('stats:%j',stats);
        let buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length,null,(err,bytesRead,buffer)=>{
            let data = buffer.toString('UTF-8');
            console.log(`Read ${bytesRead} Bytes`);
            console.log(data);
        });
    });
});