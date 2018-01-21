import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {routes} from './src/routes/';

const app = express();
const PORT = process.env.PORT || 3000;


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routes
routes(app);

//connect mongodb
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/contacts');

app.get('/', (req,res)=>{
    res.send('<h1>Welcome Node!</h1>');
});


app.listen(PORT,'192.168.1.103', ()=>{
    process.stdout.write(`Listen on port:${PORT}`);
});