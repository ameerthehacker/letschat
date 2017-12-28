import { Injectable, Self } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
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
    private firedatabase: AngularFireDatabase,
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
    this.setUserOnline(false);
    return this.firebaseAuth.auth.signOut();
  }
  public isLoggedIn(): Observable<boolean> {
    return this.user.map((user) => user ? true: false);
  }
  public setUserOnline(status) {
    if(status) {
      // Set the user is online
      this.firedatabase.database
      .ref(`/users/${this.currentUser.uid}`)
      .set({ online: true });
      // Checkpoint to make it offline when the user disconnects
      this.firedatabase.database
      .ref(`/users/${this.currentUser.uid}`)
      .onDisconnect()
      .set({ 
        online: false,
        lastSeen: Date.now()
      });
    }
    else {
      // Set the user is offline
      this.firedatabase.database
      .ref(`/users/${this.currentUser.uid}`)
      .set({ 
        online: false,
        lastSeen: Date.now()
      });
    }
  }
  public get currentUser(): firebase.User {
    return this.firebaseAuth.auth.currentUser;
  }

}
