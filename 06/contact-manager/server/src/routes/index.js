import {
        addNewContact,
        getContacts,
        updateContact,
        deleteContact,
        getContactById  } from '../controllers/';

export const routes = (app)=>{
    app.route('/contact')
         //Read all contacts
         .get((req,res,next)=>{
            //middleware
            console.log(`\nGET Contacts ${req.url} ${req.method}`);
            res.locals.isAuth = true;
            next();
            },
           getContacts)
         //Add new contact
         .post((req,res,next)=>{
            console.log(`POST Add new contact ${JSON.stringify(req.body)}`);
            next();
         },
         addNewContact);

    app.route('/contact/:contactId')
       .get((req,res,next)=>{
          console.log(`GET contact id:${req.params.contactId}`);
          next(); 
       },
       getContactById)
       //Update contact
       .put((req,res,next)=>{
            console.log(`UPDATE contact id:${req.params.contactId}`);
            next(); 
       },
       updateContact)
       //Delete contact
       .delete((req,res,next)=>{
            console.log(`DELETE contact id:${req.params.contactId}`);
            next();
       },
       deleteContact);     
}//routes