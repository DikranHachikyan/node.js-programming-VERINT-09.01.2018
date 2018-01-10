console.log(process.memoryUsage());

process.nextTick(()=>{
    console.log('Next Tick');
});

console.log(process.memoryUsage());
