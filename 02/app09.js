//const exec = require('child_process').exec;
const {exec} = require('child_process');

const child = exec('tail -f app01.js',
                   {cwd:'./'},
                   (err,stdout,stderr)=>{
                    console.log('stdout:',stdout);
                    console.log('stderr:',stderr);
                    if(err){
                        console.log('error:',err);
                    }
            });
