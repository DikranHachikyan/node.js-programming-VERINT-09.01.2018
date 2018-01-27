import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from '../contacts/contacts.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';

const routes:Routes  = [
   {path:'list', component: ContactsComponent },
   {path:'add-new',component: ContactDetailsComponent},
   {path:'**', redirectTo:'/list'} 
]; 

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class ContactsRoutingModule { }
