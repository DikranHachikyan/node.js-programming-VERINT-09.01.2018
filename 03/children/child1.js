let progress = process.argv[2],
    time = process.argv[3],
    sym = progress;

let interval = setInterval(()=>{
    // process.stdout.clearLine();
    // process.stdout.cursorTo(0);
    // process.stdout.write(`Child ${process.pid}: ${progress} `);
    progress += sym;
    process.send({ pid:process.pid, done: Math.ceil((progress.length/20*100)) });
    if( progress.length >= 20){
        clearInterval(interval);
    }
},time);

//from parent
process.on('message', (data)=>{
    if( data == 'quit'){
        process.exit(0);
    }
});