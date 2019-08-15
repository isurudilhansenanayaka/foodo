import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: "bwm-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})

export class HeaderComponent{
  public user;
    constructor(private router:Router, private auth: AuthService){
      this.auth.afAuth.authState.subscribe(
     user=>
      {this.user = user;
        console.log(this.user);}
    );
  }


  // logout(){
  //      // this.auth.logout();
  //       this.router.navigate(['/login']);
  //   }
}
