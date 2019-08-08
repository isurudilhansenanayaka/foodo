import { Component, OnInit } from '@angular/core';
import { item } from '../shared/item.module';
import { ItemService } from '../shared/item.service';
import { MapSevice } from 'src/app/common/map/map.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'bwm-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  newItem: item;
  errors: any[] =[];
  constructor(private firestore: AngularFirestore,private itemService: ItemService) { }

  ngOnInit() {
    this.newItem= new item();
   
  }
  resetForm(form? : NgForm){
    if (form != null)
    form.resetForm();
    /*this.service.formData= {
      userName: '',
      email: '',
      contact: ''
    }*/
  }

  onSubmit(form: NgForm){
    let data = form.value;
    this.firestore.collection('Items').add(data);
    this.resetForm(form);
    
    
    
  }

}
