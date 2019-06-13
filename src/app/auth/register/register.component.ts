import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";
import { NgForm, FormControl } from '@angular/forms';
import { EmailValidation, PasswordValidation, RepeatPasswordEStateMatcher } from './validation';

@Component({
  selector: 'bwm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: any= {};
  errors: any[] = [];
  mail: string = '';
  password: string = '';

   constructor(private router: Router, private afs:AuthService) {
      
   }

  ngOnInit() {

  }
  register(f: NgForm){
    this.mail = f.controls['email'].value;
    this.password = f.controls['password'].value;
    this.afs.emailSignUp(this.mail, this.password);
/*
    this.auth.register(this.formData).subscribe(
      () => {
        this.router.navigate(['/login', {registered: 'success'}]);
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors;
      })*/
  }

}
