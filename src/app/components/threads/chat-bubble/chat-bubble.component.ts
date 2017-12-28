import { Component, 
  OnInit, 
  Input } from '@angular/core';
import * as date from 'date-and-time';

@Component({
  selector: 'lc-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss']
})
export class ChatBubbleComponent implements OnInit {

  @Input()
  isReply: boolean;
  @Input()
  timestamp: number;
  @Input()
  message: string;
  @Input()
  isRead: boolean;
  time: string; 

  constructor() { }

  ngOnInit() {
    this.time = date.format(new Date(this.timestamp), 'HH:mm');
  }

}
