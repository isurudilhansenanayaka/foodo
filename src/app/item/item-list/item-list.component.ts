import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { item } from '../shared/item.module';

@Component({
  selector: 'bwm-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    const itemObservable=this.itemService.getItems();
    itemObservable.subscribe(
      (items: item[])=>{
        this.items=items;
      },
      (err)=>{

      },
      ()=>{}
   );
  }

}
