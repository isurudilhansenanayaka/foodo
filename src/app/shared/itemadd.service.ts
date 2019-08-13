import { Injectable } from '@angular/core';
import { itemadd } from './itemadd.model';
@Injectable({
  providedIn: 'root'
})
export class ItemAddService {
  formData=itemadd;
  constructor() { }
}
