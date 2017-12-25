import { Injectable, Self } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  public static providers = {
    FACEBOOK: 0,
    GOOGLE: 1,
    GITHUB: 2
  }
  public user:Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, 
    private router: Router) {
    this.user = this.firebaseAuth.authState;
    // Listen for changes in authentication
    this.firebaseAuth.auth.onAuthStateChanged((user) => {
      if(!user) {
        // Goto login page if logged out
        this.router.navigate(['/auth/login']);        
      }
      else {
        // Goto home page if logged in
        this.router.navigate(['/threads']);
      }
    });
  }

  public login(provider) {
    if (provider == AuthService.providers.FACEBOOK) {
      // Login with facebook
      return this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }
    else if (provider == AuthService.providers.GOOGLE) {
      // Login with google
      return this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
    else if (provider == AuthService.providers.GITHUB) {
      // Login with google
      return this.firebaseAuth.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
    }
  }
  public logout() {
    return this.firebaseAuth.auth.signOut();
  }
  public isLoggedIn(): Observable<boolean> {
    return this.user.map((user) => user ? true: false);
  }
  public get currentUser(): firebase.User {
    return this.firebaseAuth.auth.currentUser;
  }

}
