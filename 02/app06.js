process.on('SIGINT', ()=>{
    process.stdout.write('Ctrl+C not permitted');
});

process.on('SIGHUP',()=>{
    process.stdout.write('Reload config file');
});

setInterval(()=>{
    console.log('Running');
}, 2000);

console.log('PID:', process.pid);