import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { TempComponent } from './temp/temp.component';
import { ItemComponent } from './item/item.component';
import {ItemModule} from './item/item.module';

const routes: Routes=[
  {path: '', component: ItemComponent},
  {path: 'temp', component: TempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    TempComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
