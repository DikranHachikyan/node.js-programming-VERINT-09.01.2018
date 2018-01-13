const {EventEmitter} = require('events');

class UploadManager extends EventEmitter{

    constructor(){
        super();
    }

    upload(url){
        let _this = this,
            progress = 0,
            fileSize = 0;

        console.log(`Upload started ${url}`);

        let progressInterval = setInterval(()=>{
            progress +=20;
            fileSize +=50;
            this.emit('progress', {'progress':progress, 'size':fileSize});
        }, 100);

        setTimeout(()=>{
            clearInterval(progressInterval);

            this.emit('finished', fileSize);
        },550);

    }
}//UploadManager


const uploader = new UploadManager();

uploader.upload('movie.mp4');

uploader.on('progress', (data)=>{
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Progress: ${data.progress}  size:${data.size}`);
});


uploader.on('finished', (data)=>{
    process.stdout.write(`\nUploaded:${data} Bytes\n`)
});