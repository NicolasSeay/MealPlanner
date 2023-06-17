import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/user"

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<number>(
      this.baseUrl + "/login",
      `{"username": "${username}", "password": "${password}"}`,
      {
        headers: {'content-type':'application/json'}
      }
    )
  }

}
