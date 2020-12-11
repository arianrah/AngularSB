import { Component } from '@angular/core'

import { User } from '../../models/User'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  //properties
  user: User;

  //methods
  constructor() {
    this.user = {
      firstName: 'Ari',
      lastName: 'Rah',
      age: 25,
      address: {
        street: '41st Avenue',
        city: 'Vancouver',
        province: 'BC'
      }
    }
  };
};