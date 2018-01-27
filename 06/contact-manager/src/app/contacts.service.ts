import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Contact } from './contacts/contact';
//import { CONTACTS } from './static-data-source';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import 'rxjs/observable/of';

const URL = 'http://localhost:3000';
@Injectable()
export class ContactsService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(URL + '/contact');
    //return Observable.of(CONTACTS);
    //return of(CONTACTS);
  }

  getContactById(id:string):Observable<Contact>{
    return this.http.get<Contact>(URL + '/contact/' + id);
  }

  updateContact(contact:Contact):Observable<Contact>{
    return this.http.put<Contact>(URL + '/contact/' + contact._id, contact);
  }

  deleteContact(id:string):Observable<any>{
    return this.http.delete(URL + '/contact/' + id);
  }

  addNewContact(contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(URL + '/contact', contact);
  }
}
