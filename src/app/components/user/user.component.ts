import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
import { User } from '../../models/user';

import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';

import { AuthService } from "../../services/auth/auth.service";

@Component({
  selector: 'lc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  public user: User;
  @Output()
  public onAddClick: EventEmitter<string> = new EventEmitter<string>();
  public addingUser: boolean = false;

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  ngOnInit() {
  }
  onBtnAddClick(user) {
    // Create a new threadId
    let newThreadId = this.firestore.createId();
    this.addingUser = true;
    // Get the current user document
    this.firestore.doc(`/users/${this.authService.currentUser.uid}`)
    .ref.get()
    .then((snap) => {
      let currentUser = snap.data();
      // Add the thread to user
      let threads = user.threads || [];
      let newThreadRef = this.firestore.doc(`/threads/${newThreadId}`).ref;
      let currentUserRef = this.firestore.doc(`/users/${this.authService.currentUser.uid}`).ref;
      // Update the threads
      threads.push({ thread: newThreadRef, user: currentUserRef });
      this.firestore.doc(`/users/${user.uid}`)
      .update({
        threads: threads
      })
      // Add the thread to the current user
      threads = currentUser.threads || [];
      let userRef = this.firestore.doc(`/users/${user.uid}`).ref;
      // Update the threads
      threads.push({ thread: newThreadRef, user: userRef });
      this.firestore.doc(`/users/${this.authService.currentUser.uid}`)
      .update({
        threads: threads
      });
    });
    this.addingUser = false;    
    this.onAddClick.emit(newThreadId);
  }

}
