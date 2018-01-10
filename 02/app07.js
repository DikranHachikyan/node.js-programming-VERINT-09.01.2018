//const exec = require('child_process').exec;
const {exec} = require('child_process');

const child = exec('cat *.js report.txt| wc -l',
                   {cwd:'./'},
                   (err,stdout,stderr)=>{
                    console.log('stdout:',stdout);
                    console.log('stderr:',stderr);
                    if(err){
                        console.log('error:',err);
                    }
            });
