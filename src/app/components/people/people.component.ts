import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
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
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.firestore.collection('/users')
    .snapshotChanges()
    .map((changes) => {
      return changes.map((snap) => {
        let user = snap.payload.doc.data();
        user.uid = snap.payload.doc.id;
        return user;
      });
    })
    .subscribe((users: User[]) => {
      users.forEach((user: User , index) => {
        if(user.uid == this.authService.currentUser.uid) {
          users.splice(index, 1);
          return;
        }
      });
      this.people = users;
    });
  }
  onAddClick(threadId) {
    this.router.navigate(['/threads', threadId]);
  }

}
