const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(`<!DOCTYPE html>
               <html lang="en">
               <head>
                <meta charset="UTF-8" />
                <title>Document</title>
               </head>
               <body>
                    <h1>Welcome!</h1>
                    <p>Url: ${req.url}</p>
                    <p>Method: ${req.method}</p>
               </body>
               </html>`);
    res.end();

});

const options = {
    host:'192.168.1.103',
    port:3000
};
server.listen(options, ()=>{
    console.log(`Listen on ${server.address().address}:${server.address().port}`);
});