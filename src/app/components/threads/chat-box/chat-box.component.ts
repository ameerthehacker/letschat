import { Component, 
  OnInit, 
  ViewChild,
  ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'lc-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  @ViewChild('messageBox')
  messageBox: ElementRef;
  message: string;
  threadId: string;
  messages: any[];

  constructor(private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    private authService: AuthService) { }

  ngOnInit() {
    this.message = "";
    this.route.params.subscribe((params) => {
      this.threadId = params.thread_id;
      // Load the messages
      let messagesPath = `/threads/${this.threadId}/messages`;
      this.firestore.collection(messagesPath)
      .ref
      .orderBy('timestamp', 'desc')
      .limit(20)
      .onSnapshot((snap) => {
        let messages = [];        
        snap.docs.forEach((message: any) => {
          messages.push(message.data());
        });
        this.messages = messages.reverse();
        this.scrollToBottom();
      });
    });
  }
  onBtnSendClick() {
    if(this.message.length != 0) {
      let messagesPath = `/threads/${this.threadId}/messages`;
      let senderRef = this.firestore
      .doc(`/users/${this.authService.currentUser.uid}`)
      .ref;
      let message = {
        sender: senderRef,
        message: this.message,
        timestamp: Date.now()
      }
      this.message = "";
      this.firestore.collection(messagesPath)
      .add(message)
      .catch((err) => {
        console.log(err);
      });
    }
  }
  private scrollToBottom() {
    setTimeout(() => this.messageBox.nativeElement.scrollTop = this.messageBox.nativeElement.scrollHeight, 500);
  }

}
