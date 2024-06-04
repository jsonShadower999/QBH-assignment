import { Injectable } from '@nestjs/common';
import { User } from './userdata.interface';
@Injectable()
export class UserdataService {
   
    private readonly users: User[] = [];
    private lastId = 0;

  addUser(user: User) {
    console.log(user);
    this.users.push(user);

  }
//   createUser(req) {
//     console.log(req.body);
//     const { name, email,phone,address } = req.body;
//     const user = { id: ++this.lastId, name, email,phone,address };
//     this.users.push(user);
//     //res.status(201).json(user);
//   };

  updateUser(userId: number, user: User) {
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  deleteUser(userId: number) {
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(userId: number): User {
    return this.users.find(u => u.id === userId);
  }
}

    


// user.service.ts



