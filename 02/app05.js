process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk)=>{
    if( chunk === 'end\n'){
        process.exit(0);
    }
    process.stdout.write('data:' + chunk);
});
