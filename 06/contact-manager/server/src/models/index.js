import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:'First name is required field'
    },
    lastName:{
        type:String,
        required:'Last name is required field'
    },
    email:{
        type:String,
        required:'Email is required'
    },
    phone:{
        type:String
    },
    created_date:{
        type:Date,
        default: Date.now
    }

});