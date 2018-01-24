import { Component, OnInit } from '@angular/core';

import { Contact } from './contact';
//import { CONTACTS } from '../static-data-source';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts:Contact[];
  selectedContact:Contact;

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts():void{
    this.contactsService.getContacts()
                        .subscribe( (contacts)=> this.contacts = contacts,
                                    (err)=>console.log(err),
                                    ()=>console.log('Contacts loaded ...'));
  }

  onSelectContact(idx:number):void{
    this.selectedContact = this.contacts[idx];
    //console.log(idx);
  }
}
