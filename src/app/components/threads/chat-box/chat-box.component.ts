import { Component, 
  OnInit, 
  ViewChild,
  ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from 'firebase';
import { AuthService } from '../../../services/auth/auth.service';

declare var $: any;

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
  showOldMessages: boolean = false;
  messagesLimit: number;
  loadingOldMessages: boolean = false;

  constructor(private route: ActivatedRoute, 
    private firestore: AngularFirestore,
    private authService: AuthService) { }

  ngOnInit() {
    this.message = "";
    // Start with 20 messages    
    this.messagesLimit = 20;
    this.route.params.subscribe((params) => {
      this.threadId = params.thread_id;
      this.loadMessages(this.threadId, this.messagesLimit, (messages) => {
        this.messages = messages;
        this.scrollToBottom();
        if(messages.length >= this.messagesLimit) {
          this.showOldMessages = true;
        }
        else {
          this.showOldMessages = false;          
        }
      });
    });
  }
  onBtnOldMessagesClick() {
    this.messagesLimit += 10;
    this.loadingOldMessages = true;
    this.loadMessages(this.threadId, this.messagesLimit, (messages) => {
      this.messages = messages;
      if(messages.length >= this.messagesLimit) {
        this.showOldMessages = true;
      }
      else {
        this.showOldMessages = false;          
      }
      this.loadingOldMessages = false;      
    }, true);
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
  onKeyPress(evt) {
    // Enter is pressed
    if(evt.keyCode == 13) {
      // Trigger message sending
      this.onBtnSendClick();
    }
  }
  private loadMessages(threadId, messagesSize, callback, once = false) {
    // Load the messages
    let messagesPath = `/threads/${threadId}/messages`;
    let querySnap = this.firestore.collection(messagesPath)
    .ref
    .orderBy('timestamp', 'desc')
    .limit(messagesSize);
    if(!once) {
      querySnap
      .onSnapshot((snap) => {
        let messages = [];        
        snap.docs.forEach((message: any) => {
          messages.push(message.data());
        });
        callback(messages.reverse());
      });
    }
    else {
      querySnap
      .get()
      .then((snap) => {
        let messages = [];        
        snap.docs.forEach((message: any) => {
          messages.push(message.data());
        });
        callback(messages.reverse());
      });
    }
  }
  private scrollToBottom() {
    setTimeout(() => {
      let scrollHeight = this.messageBox.nativeElement.scrollHeight;
      $(this.messageBox.nativeElement).animate({
        scrollTop: scrollHeight
      }, 1500);
    }, 500);
  }

}
