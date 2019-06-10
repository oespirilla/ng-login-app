import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from '../contacts/contacts.component';
import { ContactsListComponent } from '../contacts/contacts-list.component';

const routes: Routes = [
  {path: '', component: ContactsListComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactsRoutingModule { }
