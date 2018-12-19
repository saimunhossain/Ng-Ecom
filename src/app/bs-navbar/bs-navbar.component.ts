import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import * as firebbase from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  user$: Observable<firebbase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  logout(){
    this.afAuth.auth.signOut();
  }

}
