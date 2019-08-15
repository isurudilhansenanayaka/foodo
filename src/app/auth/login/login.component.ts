import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public form: FormGroup;
 // public ures$= this.auth.ures;
  constructor(public auth: AuthService, private fb: FormBuilder) {

    this.form = this.fb.group({
      email: ['', Validators.required ],
      password : ['', Validators.required ]
   } );
  }

  ngOnInit(){

  }

  login(){
    //const inputValue = this.form.value;
    //console.log(inputValue.email, inputValue.password);
  }
}
