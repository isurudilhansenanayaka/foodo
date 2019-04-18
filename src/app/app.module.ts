import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from './../environments/environment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { AuthModule} from './auth/auth.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ItemComponent } from './item/item.component';
import {ItemModule} from './item/item.module';



const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: 'full'},
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent


   

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ItemModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
