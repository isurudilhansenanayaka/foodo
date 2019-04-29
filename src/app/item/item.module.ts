import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { MapModule} from '../common/map/map.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemComponent } from './item.component';
import {ItemService} from './shared/item.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AuthGuard } from '../auth/shared/auth.guard';
const routes: Routes=[
    {path: 'items',
     component: ItemComponent,
     children: [
         {path: '', component: ItemListComponent},
         {path: ':itemId', component: ItemDetailComponent} // , canActivate: [AuthGuard]
     ]
    }
    
  ]

@NgModule({
    declarations: [
    ItemComponent,
    ItemListComponent,
    ItemListItemComponent,
    ItemDetailComponent
    ],
    imports: [CommonModule,
    RouterModule.forChild(routes),
    MapModule
],
    providers: [ItemService]
})
export class ItemModule{}