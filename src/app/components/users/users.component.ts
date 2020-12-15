import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit(): void {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 60,
          address: {
            street: '41st Avenue',
            city: 'Vancouver',
            province: 'BC'
          },
          isActive: true,
          registered: new Date('08/02/2020 08:30:00'),
          hide: true
        },
        {
          firstName: 'Bob',
          lastName: 'The Builder',
          age: 32,
          address: {
            street: '52nd Avenue',
            city: 'West Vancouver',
            province: 'BC'
          },
          isActive: false,
          registered: new Date('010/21/2020 12:30:00'),
          hide: true
        },
        {
          firstName: 'Steven',
          lastName: 'Aoki',
          age: 29,
          address: {
            street: 'Fraser St',
            city: 'Vancouver',
            province: 'BC'
          },
          isActive: true,
          registered: new Date('011/02/2020 011:25:00'),
          hide: true
        }
      ];
      this.loaded = true;
  }
  addUser(user: User) {
    this.users.push(user)
  }

  toggleHide(user: User) {
    user.hide = !user.hide
  }

}
