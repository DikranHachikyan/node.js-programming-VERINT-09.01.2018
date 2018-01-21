import mongoose from 'mongoose';
import {ContactSchema} from '../models/';

const Contact = mongoose.model('Contact', ContactSchema);

//POST Request

export const addNewContact = (req,res)=>{
    let newContact = new Contact(req.body);

    // newContact.save((err,contact)=>{
    //     if(err){
    //         res.json(err);
    //         return;
    //     }
    //     res.json(contact);
    // });
    newContact.save()
              .then((contact)=>res.json(contact))
              .catch((err)=>res.json(err));

}//add new contact


//GET Request
export const getContacts = (req,res)=>{
    Contact.find({})
           .then( (contacts)=>res.json(contacts) )
           .catch( (err)=>res.json(err));
}//get contacts


export const updateContact  = (req,res)=>{
    Contact.findOneAndUpdate( {_id: req.params.contactId},
                              req.body,
                              {new:true})
           .then((contact)=>res.json(contact))
           .catch((err)=>res.json(err));
}//update contact

export const deleteContact = (req,res)=>{
    Contact.remove({ _id: req.params.contactId })
           .then((status)=>res.json(status))
           .catch((err)=>res.json(err));
}