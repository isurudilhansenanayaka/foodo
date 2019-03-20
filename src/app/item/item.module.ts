import {NgModule} from '@angular/core';

import { ItemListComponent } from './item-list/item-list.component';
import { ItemListItemComponent } from './item-list-item/item-list-item.component';
import { ItemComponent } from './item.component';
@NgModule({
    declarations: [
    ItemComponent,
    ItemListComponent,
    ItemListItemComponent
    ],
    imports: []
})
export class ItemModule{}