import { Component, OnInit } from '@angular/core';

import { User } from "../../models/user";
import { Thread } from "../../models/thread";

import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'lc-threads',
  templateUrl: './threads.component.html',
  styles: []
})
export class ThreadsComponent implements OnInit {

  public currentUser: User;
  public threadList: Thread[];

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  ngOnInit() {
    this.threadList = [];
    // Get the current user
    this.authService.user.subscribe((user) => {
      this.currentUser = user;
      // Get the user threads
      this.firestore.doc(`users/${user.uid}`)
      .valueChanges()
      .subscribe((userDoc: any) => {
        let threads = userDoc.threads;
        threads.forEach((thread, index) => {
          this.firestore.doc(thread.user.path)
          .valueChanges()
          .subscribe((userDoc: User) => {
            // Assign it to the threadlist
            this.threadList[index] = {
              thread: thread.thread,
              user: userDoc
            }
          });
        });
      });
    });
    
  }

}
