import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { User } from "../../models/user";
import { Thread } from "../../models/thread";

import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'lc-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  public currentUser: Observable<firebase.User>;
  public status: string;
  public threads: Thread[];
  public loadingThreads: boolean = false;

  constructor(private firestore: AngularFirestore, 
    private firedatabase: AngularFireDatabase,
    private authService: AuthService) { }

  ngOnInit() {
    // Set the user is online
    this.authService.setUserOnline(true);
    this.threads = [];
    this.loadingThreads = true;
    this.currentUser = this.authService.user;    
    // Get the current user
    this.authService.user.subscribe((user) => {
      // Get the user threads
      this.firestore.doc(`users/${user.uid}`)
      .valueChanges()
      .subscribe((userDoc: any) => {
        this.status = userDoc.status;
        let threads = userDoc.threads;
        this.loadingThreads = false;
        // Check if user has any threads
        if(threads) {
          threads.forEach((thread, index) => {
            this.firestore.doc(thread.user.path)
            .valueChanges()
            .subscribe((userDoc: User) => {
              // Assign the uid
              userDoc.uid = thread.user.id;
              // Assign it to the threadlist
              this.threads[index] = {
                thread: thread.thread,
                user: userDoc
              }
              // Set each user online status
              this.onlineStatus(userDoc, (status) => {
                // Return if the user record is not yet created in firebase
                if(!status) { return; }
                this.threads[index].user.online = status.online;              
                if(!status.online) {
                  this.threads[index].user.lastSeen = status.lastSeen;
                }
              });
            });
          });
        }
      });
    });
  }
  private onlineStatus(user, callback) {
    this.firedatabase.database
    .ref(`/users/${user.uid}`)
    .on('value', (snap) => {
      callback(snap.val());
    });
  }

}
