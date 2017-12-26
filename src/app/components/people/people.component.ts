import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';

import { User } from "../../models/user";

import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'lc-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: User[];

  constructor(private firestore: AngularFirestore, 
    private authService: AuthService) { }

  ngOnInit() {
    this.firestore.collection('/users')
    .snapshotChanges()
    .map((changes) => {
      return changes.map((snap) => {
        let user = snap.payload.doc.data();
        user.id = snap.payload.doc.id;
        return user;
      });
    })
    .subscribe((users: User[]) => {
      this.people = users;
    });
  }
  onAddClick(user) {
    // Get the current user document
    this.firestore.doc(`/users/${this.authService.currentUser.uid}`)
    .ref.get()
    .then((snap) => {
      let currentUser = snap.data();
      // Create a new threadId
      let newThreadId = this.firestore.createId();
      // Add the thread to user
      let threads = user.threads || [];
      let newThreadRef = this.firestore.doc(`/threads/${newThreadId}`).ref;
      let currentUserRef = this.firestore.doc(`/users/${this.authService.currentUser.uid}`).ref;
      // Update the threads
      threads.push({ thread: newThreadRef, user: currentUserRef });
      this.firestore.doc(`/users/${user.id}`)
      .update({
        threads: threads
      })
      // Add the thread to the current user
      threads = currentUser.threads || [];
      let userRef = this.firestore.doc(`/users/${user.id}`).ref;
      // Update the threads
      threads.push({ thread: newThreadRef, user: userRef });
      this.firestore.doc(`/users/${this.authService.currentUser.uid}`)
      .update({
        threads: threads
      });
    });
  }

}
