import { Component, 
  OnInit, 
  Input } from '@angular/core';

import { Thread } from "../../../models/thread";

@Component({
  selector: 'lc-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.scss']
})
export class ThreadListComponent implements OnInit {

  @Input()
  threads: Thread[];

  constructor() { }

  ngOnInit() {
  }

}
