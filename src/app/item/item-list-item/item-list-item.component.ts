import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css']
})
export class ItemListItemComponent implements OnInit {

@Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
