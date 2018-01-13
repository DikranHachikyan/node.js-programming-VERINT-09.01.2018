const {EventEmitter} = require('events');
const {inherits}     = require('util');

function UploadManager(){

    this.upload = function(url){
        let _this = this,
            progress = 0,
            fileSize = 0;

        console.log(`Upload started ${url}`);

        let progressInterval = setInterval(()=>{
            progress +=20;
            fileSize +=50;
            _this.emit('progress', {'progress':progress, 'size':fileSize});
        }, 100);

        setTimeout(()=>{
            clearInterval(progressInterval);

            _this.emit('finished', fileSize);
        },550);

    }
}//UploadManager

inherits(UploadManager, EventEmitter);

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