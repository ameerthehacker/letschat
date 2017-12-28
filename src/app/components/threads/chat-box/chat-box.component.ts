import { Component, 
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase';

import { AuthService } from '../../../services/auth/auth.service';

declare var $: any;

@Component({
  selector: 'lc-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit, OnDestroy {

  @ViewChild('messageBox')
  public messageBox: ElementRef;
  public message: string;
  public threadId: string;
  public messages: any[];
  public showOldMessages: boolean = false;
  public messagesLimit: number;
  public loadingOldMessages: boolean = false;
  public loadingMessages: boolean = false;
  public messagesListener;

  constructor(private route: ActivatedRoute, 
    private firedatabase: AngularFireDatabase,
    private firestore: AngularFirestore,
    private authService: AuthService) { }

  ngOnInit() {
    this.message = "";
    // Start with 20 messages    
    this.messagesLimit = 20;
    this.route.params.subscribe((params) => {
      // unsubscribe previous thread
      if(this.messagesListener) { this.messagesListener() }
      this.threadId = params.thread_id;
      this.loadingMessages = true;
      this.loadMessages(this.threadId, this.messagesLimit, (messages) => {
        this.messages = messages;
        this.scrollToBottom();
        if(messages.length >= this.messagesLimit) {
          this.showOldMessages = true;
        }
        else {
          this.showOldMessages = false;          
        }
        this.loadingMessages = false;        
      });
    });
  }
  ngOnDestroy() {
    if(this.messagesListener) {
      this.messagesListener();      
    }
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
        timestamp: Date.now(),
        read: false
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
    this.firedatabase.database
    .ref(`/users/${this.authService.currentUser.uid}`)
    .update({ typing: true })
    .then(() => {
      setTimeout(() => {
        this.firedatabase.database
        .ref(`/users/${this.authService.currentUser.uid}`)
        .update({ typing: false })
      }, 1000);
    });
    this.firedatabase.database
    .ref(`/users/${this.authService.currentUser.uid}`)
    .onDisconnect()
    .update({ typing: false });
  }
  private loadMessages(threadId, messagesSize, callback, once = false) {
    // Load the messages
    let messagesPath = `/threads/${threadId}/messages`;
    let querySnap = this.firestore.collection(messagesPath)
    .ref
    .orderBy('timestamp', 'desc')
    .limit(messagesSize)
    if(!once) {
      this.messagesListener = querySnap
      .onSnapshot((snap) => {
        let messages = [];        
        snap.docs.forEach((message: any) => {
          messages.push(message.data());
          if(message.data().sender.id != this.authService.currentUser.uid) {
            this.firestore.doc(`${messagesPath}/${message.id}`)
            .update({ read: true });
          }
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
