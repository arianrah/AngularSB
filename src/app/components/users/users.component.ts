import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      city: '',
      province: ''
    }
  };
  
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit(): void {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johndoe@gmail.com',
          isActive: true,
          registered: new Date('08/02/2020 08:30:00'),
          hide: true
        },
        {
          firstName: 'Bob',
          lastName: 'The Builder',
          email: 'bobthebuilder@gmail.com',
          isActive: false,
          registered: new Date('010/21/2020 12:30:00'),
          hide: true
        },
        {
          firstName: 'Steven',
          lastName: 'Aoki',
          email: 'stevenaoki@gmail.com',
          isActive: true,
          registered: new Date('011/02/2020 011:25:00'),
          hide: true
        }
      ];
      this.loaded = true;
  };

  toggleHide(user: User) {
    user.hide = !user.hide
  };

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid')
    } else {
      value.isActive = true;
      value.registered = new Date()
      value.hide = true;
      this.users.unshift(value)
      this.form.reset()
    }
  };

}
