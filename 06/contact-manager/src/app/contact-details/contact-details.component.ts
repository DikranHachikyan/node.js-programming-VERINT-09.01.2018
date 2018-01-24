import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';

import { Contact } from '../contacts/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  @Input() contact:Contact; 
  message:string;

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.mesesage = 'Button Clicked';
  }
}
