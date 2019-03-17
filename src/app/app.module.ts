import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { ItemComponent } from './item/item.component';
import { TempComponent } from './temp/temp.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemListItemComponent } from './item/item-list-item/item-list-item.component';

const routes: Routes=[
  {path: '', component: ItemComponent},
  {path: 'temp', component: TempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    TempComponent,
    ItemListComponent,
    ItemListItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
