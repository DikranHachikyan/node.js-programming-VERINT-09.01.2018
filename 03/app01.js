const {fork} = require('child_process');
const children = [];



console.log(`Main process:${process.pid}`);

for(let i = 1; i < 4 ; i++ ){
    let child = fork('./children/child1.js',[i, 100*i]);
    child.on('message', (data)=>{
    //process.stdout.clearLine();
    //process.stdout.cursorTo(0);
    process.stdout.write(`Child ${data.pid} done:${data.done}\n`);
    if(data.done == 100){
        child.send('quit');
        //process.exit(0);
    }
    }); //on message

    children.push(child);
}
