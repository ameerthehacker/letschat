import { Component, 
  OnInit, 
  Input,
  EventEmitter, 
  Output } from '@angular/core';

import { Thread } from "../../../models/thread";
import { User } from '../../../models/user';

@Component({
  selector: 'lc-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  @Output()
  public select: EventEmitter<User> = new EventEmitter<User>();
  @Input()
  public threads: Thread[];

  constructor() { }

  ngOnInit() {
  }
  onThreadClick(user) {
    this.select.emit(user);
  }

}
