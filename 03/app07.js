const fs = require('fs');
const path = require('path');

const options = {
    persistent:true,
    recursive:true,
    encoding:'UTF-8'
};

fs.watch('./', options, (event, filename)=>{
    console.log(`Event:${event} ${filename}`);
});