import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Input, Output, EventEmitter } from '@angular/core';
import { ContactsService } from '../contacts.service';

import { Router, NavigationEnd} from '@angular/router';
import { Contact } from '../contacts/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact:Contact; 
  @Output() contactUpdated:EventEmitter<any> = new EventEmitter();

  constructor(private contactsService:ContactsService,
              private router:Router,
              private location:Location) { 
      this.router.events
                 .subscribe( (event)=>{
                    if( event instanceof NavigationEnd && event.url === '/add-new'){
                      this.contact = new Contact();
                    }
                 });
  }

  ngOnInit() {
  }
  saveContact(){
    if( this.contact._id ){
      this.contactsService.updateContact(this.contact)
                        .subscribe( (contact)=>{
                          console.log(contact);
                          this.contact = contact;
                          this.contactUpdated.emit('update');
                        },
                        (err)=>console.log(err),
                        ()=>console.log(`Contact updated`));  
    }
    else{
      this.contact._id = this.contact.created_date = undefined;

      this.contactsService.addNewContact(this.contact)
                          .subscribe( (contact)=>{
                            console.log(contact);
                            this.contact = contact;
                          },
                          (err)=>console.log(err),
                          ()=>console.log(`Contact added`));
    }
  }

  goBack():void{
    this.location.back();
  }
}
