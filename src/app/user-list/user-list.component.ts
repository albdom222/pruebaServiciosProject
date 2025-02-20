import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  newName: string = '';
  newEmail: string = '';
  selectedUserId: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(){
    this.users = this.userService.getUsers();
  }

  addUser() {
    if (this.newName.trim() && this.newEmail.trim()) {
      this.userService.addUser(this.newName, this.newEmail);
      this.newName = '';
      this.newEmail = '';
    }
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }


  editUser(id: number) {
    const user = this.users.find(u => u.id === id);
    if (user) {
      const newName = prompt('Nuevo nombre:', user.name);
      const newEmail = prompt('Nuevo email:', user.email);

      if (newName !== null && newEmail !== null) {
        this.userService.updateUser(id, newName, newEmail);
      }
    }
  }

  selectUser(id: number) {
    this.selectedUserId = id;
  }
}
