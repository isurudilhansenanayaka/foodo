import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { item} from './item.module';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ItemService{
  formData : item;
  itemss:any;
  constructor(private firestore:AngularFirestore) { }

  getitem(id:any){
    return this.firestore.collection('Items').doc(id).valueChanges();
  }

  getAllitem(){
    return this.firestore.collection('Items').snapshotChanges();
  }
}
