import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { item } from '../shared/item.module';

@Component({
  selector: 'bwm-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items:any;

  constructor(private itemService: ItemService) { }

  ngOnInit() {  
    this.itemService.getAllitem().subscribe(data=>{
      this.items=data.map(item=>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
      
      console.log(this.items);
    });

}
}