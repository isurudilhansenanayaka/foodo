import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ContactModule { }
