import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';

import { User } from "../../models/user";


@Component({
  selector: 'lc-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: User[];

  constructor(private firestore: AngularFirestore) { }

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
    
  }

}
