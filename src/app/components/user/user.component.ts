import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'lc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  @Output()
  onAddClick: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }
  onBtnAddClick(user) {
    this.onAddClick.emit(user);
  }

}
