import {Component, Input} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input() userId!: number;
  user: any;

  constructor(private userService: UserService) {}

  ngOnChanges() {
    if (this.userId) {
      this.user = this.userService.getUserById(this.userId);
    }
  }

}
