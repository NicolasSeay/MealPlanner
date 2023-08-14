import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/actions/user.actions';
import { Logger } from 'src/app/app.logger';
import { selectUser, selectUserId } from 'src/app/app.selectors';
import { UserState } from 'src/app/reducers/user.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user$: Observable<UserState>
  userId$: Observable<number>
  loginForm!: FormGroup
  registerForm!: FormGroup
  loading = false
  submitted = false
  isRegistering = false

  constructor(private store: Store, private formBuilder: FormBuilder, private logger: Logger) {
    this.user$ = this.store.select(selectUser)
    this.userId$ = this.store.select(selectUserId)
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName:  ['', Validators.required],
        username:  ['', Validators.required],
        password:  ['', Validators.required]
    });
  }

  get l() { return this.loginForm.controls }

  get r() { return this.registerForm.controls }

  doLogin() {
    this.logger.info(("Login attempt: " + this.l['username'].value + " " + this.l['password'].value))
    this.submitted = true
    this.store.dispatch(login({ username: this.l['username'].value, password: this.l['password'].value }))
  }

  // doRegister() {
  //   this.logger.info(("Registration attempt: " + this.l['firstname'].value + " " + this.l['lastname'].value + " " + this.l['username'].value + " " + this.l['password'].value))
  //   this.submitted = true
  //   this.store.dispatch(register({
  //     firstName: this.r['firstName'].value,
  //     lastName: this.r['lastName'].value,
  //     username: this.r['username'].value,
  //     password: this.r['password'].value,
  //   }))
  // }

  alertMe() {
    this.store.select(selectUserId).subscribe(userId => alert("ha ha " + userId))
  }

}
