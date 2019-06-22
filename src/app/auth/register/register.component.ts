import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import { NgForm, FormControl } from '@angular/forms';
import { UserProfilesService } from '../shared/user-profiles.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

   constructor(private router: Router, 
    private afs:AuthService, 
    private service:UserProfilesService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) {
      
   }

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
    let data = form.value;
    this.firestore.collection('UserProfiles').add(data);
    this.resetForm(form);
    
    this.toastr.success('Submitted successfully');
    
  }

}
