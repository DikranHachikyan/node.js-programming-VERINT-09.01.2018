import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import {routes} from './src/routes/';

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

//cors
app.use(cors());

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


app.listen(PORT,HOST, ()=>{
    process.stdout.write(`Listen on port:${PORT}`);
});