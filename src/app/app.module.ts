import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from './../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { AuthModule} from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {ItemModule} from './item/item.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ContactComponent } from './contact/contact.component';
import {UserProfilesService } from './auth/shared/user-profiles.service';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ItemAddService } from './shared/itemadd.service';


const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent




  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ItemModule,
    AuthModule,
// tslint:disable-next-line: deprecation
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
