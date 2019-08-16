import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bwm-item-list-item',
  templateUrl: './item-list-item.component.html',
  styleUrls: ['./item-list-item.component.css']
})
export class ItemListItemComponent {

@Input() item: any;
public user;
  constructor(public auth: AuthService, public router: Router) {
    this.auth.afAuth.authState.subscribe(
      user=>
       {this.user = user;
         console.log(this.user);}
     );
   }

//  isLoggedin(){
//     if(this.user){
//      this.router.navigate(['/items/{{item.id}}']);
//    } else {
//     this.router.navigate(['/login']);
//   }

//  }
}
