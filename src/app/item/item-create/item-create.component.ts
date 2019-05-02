import { Component, OnInit } from '@angular/core';
import { item } from '../shared/item.module';
import { ItemService } from '../shared/item.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'bwm-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  newItem: item;
  errors: any[] =[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.newItem= new item();
    this.newItem.shared= false;
  }

}
