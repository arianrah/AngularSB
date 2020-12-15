import { Injectable } from '@angular/core';

import { User } from '../models/User'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() { 
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
   }
   getUsers(): User[] {
    return this.users;
   }

   addUser(user: User) {
     this.users.unshift(user);
   }
}
