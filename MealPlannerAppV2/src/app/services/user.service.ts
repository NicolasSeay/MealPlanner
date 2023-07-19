import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { LoginRequest } from '../models/loginRequest';
import { Logger } from '../app.logger';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/user"

  constructor(private http: HttpClient, private logger: Logger) { }

  login(username: string, password: string) {
    this.logger.info("[Service] Sending login request to backend")
    var loginRequest: LoginRequest = {
      username,
      password
    }
    return this.http.post<User>(
      this.baseUrl + "/login",
      loginRequest,
      {
        headers: {'content-type':'application/json'}
      }
    )
  }

}
