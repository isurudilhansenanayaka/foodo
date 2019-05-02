import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { item } from '../../shared/item.module';
@Component({
  selector: 'bwm-item-detail-order',
  templateUrl: './item-detail-order.component.html',
  styleUrls: ['./item-detail-order.component.css']
})
export class ItemDetailOrderComponent implements OnInit {
  @Input() item: item;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  openConfirmModal(content){
    this.modalService.open(content);
  }
}
