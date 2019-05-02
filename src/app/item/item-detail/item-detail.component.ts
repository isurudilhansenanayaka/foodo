import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ItemService} from '../shared/item.service';
import {item} from '../shared/item.module';

@Component({
  selector: 'bwm-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  currentId:String;
  item:item;
  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params)=>{
        
        this.getItem(params['itemId']);
      }
    )
  }
  getItem(itemId: String){
    this.itemService.getItemById(itemId).subscribe(
      (item: item)=>{
        this.item=item;
      }
    );
  }
}
