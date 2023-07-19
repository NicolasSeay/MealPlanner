import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = ''
  password: String = ''
  userId: Number = 0

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.username, this.password).subscribe(
      data => this.userId = data
    )
  }

  alertMe() {
    alert(this.userId)
  }

}
