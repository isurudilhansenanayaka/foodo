import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public user$: Observable<User>;
 //public ures$: Observable<any>;

    constructor( public afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router) {

       //this.ures$= afAuth.authState;
      // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`UserProfiles/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
    }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.router.navigate(['/']);
    return this.updateUserData(credential.user);

  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`UserProfiles/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  emailSignUp(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(user =>{
        return this.afs.collection('userProfiles').add(user);
    });
  }

  // isAuthenticated(): Observable<boolean>{
  //  return this.ures$.map(ures$ => ures$ && ures$.uid !== undefined);
  //  }


}
  // emailSignUp(email: string, password: string) {
  //   return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  //     .then(user => {
  //       return this.setUserDoc(user) // create initial user document
  //     })
  //     .catch(error => this.handleError(error) );

