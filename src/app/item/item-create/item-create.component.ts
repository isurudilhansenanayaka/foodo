import { Component, OnInit } from '@angular/core';
import { item } from '../shared/item.module';
import { ItemService } from '../shared/item.service';
import { MapSevice } from 'src/app/common/map/map.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ItemAddService } from '../../shared/itemadd.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'bwm-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  newItem: item;
  errors: any[] =[];
  formData:any= {};
  constructor(private firestore: AngularFirestore,private toastr: ToastrService, private itemadd: ItemAddService, private mapservice: MapSevice) { }

  ngOnInit() {
    this.resetForm();
   
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
    console.log("return");
    let data = form.value;
    this.firestore.collection('Items').add(data);
    this.resetForm(form);
    
   this.toastr.success('Submitted successfully');
    
  }

}
