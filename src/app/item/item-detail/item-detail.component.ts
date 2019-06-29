import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ItemService} from '../shared/item.service';
import {item} from '../shared/item.module';
import { MapSevice } from 'src/app/common/map/map.service';

@Component({
  selector: 'bwm-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  currentId:any;
  item:any;
  constructor(private route: ActivatedRoute,
    private itemService: ItemService, private mapservice: MapSevice) { }

  ngOnInit() {
    
    this.route.params.subscribe(params=>{
        this.itemService.getitem(params["itemId"]).subscribe(data=>{
          this.item=data;
          console.log(this.item);
        })
      }
    );
    
  }
  getItem(itemId: String){
    // this.itemService.getitem(itemId).subscribe(data=>{
    //   this.items=data;
    // }
    // );
  }
}
