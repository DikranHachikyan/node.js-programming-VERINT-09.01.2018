import { Injectable } from '@angular/core';

import { Contact } from './contacts/contact';
import { CONTACTS } from './static-data-source';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

//import 'rxjs/observable/of';
@Injectable()
export class ContactsService {

  constructor() { }

  getContacts():Observable<Contact[]>{
    return Observable.of(CONTACTS);
    //return of(CONTACTS);
  }
}
