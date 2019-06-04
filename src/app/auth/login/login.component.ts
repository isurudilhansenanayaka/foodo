import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(public auth: AuthService) {

  }
}
