import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
