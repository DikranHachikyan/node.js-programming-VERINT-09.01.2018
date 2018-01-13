const fs = require('fs');
const fileName = './data_files/data.json';

fs.readFile(fileName,'UTF-8', (err, content)=>{
    let json = JSON.parse(content);
    json.forEach((item)=>console.log('%j',item));
});