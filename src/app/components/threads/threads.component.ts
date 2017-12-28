import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";

import { User } from "../../models/user";
import { Thread } from "../../models/thread";

import { AngularFirestore } from "angularfire2/firestore";
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

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

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
              // Assign it to the threadlist
              this.threads[index] = {
                thread: thread.thread,
                user: userDoc
              }
            });
          }); 
        }
      });
    });
    
  }

}
