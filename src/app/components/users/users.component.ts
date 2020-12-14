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

  constructor() { }

  ngOnInit(): void {
      this.users = [
        {
          firstName: 'Ari',
          lastName: 'Rah',
          age: 25,
          address: {
            street: '41st Avenue',
            city: 'Vancouver',
            province: 'BC'
          }
        },
        {
          firstName: 'Bob',
          lastName: 'The Builder',
          age: 32,
          address: {
            street: '52nd Avenue',
            city: 'West Vancouver',
            province: 'BC'
          }
        },
        {
          firstName: 'Steven',
          lastName: 'Aoki',
          age: 29,
          address: {
            street: 'Fraser St',
            city: 'Vancouver',
            province: 'BC'
          }
        }
      ];
      this.loaded = true;
    // this.showExtended = false;
    this.addUser({
        firstName: 'Michael',
        lastName: 'Angelo'
    });
  }
  addUser(user: User) {
    this.users.push(user)
  }
}
