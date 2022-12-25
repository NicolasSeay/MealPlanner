import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: String = ''

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.username, this.password)
  }

}
