const fs = require('fs');
const path = require('path');

const readDir = (dir)=>{
    let files = fs.readdirSync(dir);

    files.forEach( (fileName)=>{
        let file = path.join(dir, fileName);
        let stats = fs.statSync(file);

        if(stats.isFile()){
            console.log(` ${fileName} perm:${(stats.mode & 0777).toString(8) }`);
        }
        else if( stats.isDirectory()){
            console.log(`Directory:${file}`);
            readDir(file);
        }
    });//for each file
}

readDir('./');