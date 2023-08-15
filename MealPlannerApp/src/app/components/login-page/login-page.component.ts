import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, register, registerCancel } from 'src/app/actions/user.actions';
import { Logger } from 'src/app/app.logger';
import { selectRegisterError, selectUser, selectUserId } from 'src/app/app.selectors';
import { UserState } from 'src/app/reducers/user.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user$: Observable<UserState>
  userId$: Observable<number>
  registerError$: Observable<string>
  loginForm!: FormGroup
  registerForm!: FormGroup
  loading = false
  submitted = false
  isRegistering = false

  constructor(private store: Store, private formBuilder: FormBuilder, private logger: Logger) {
    this.user$ = this.store.select(selectUser)
    this.userId$ = this.store.select(selectUserId)
    this.registerError$ = this.store.select(selectRegisterError)
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
        firstname: ['', Validators.required],
        lastname:  ['', Validators.required],
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

  beginRegistration() {
    this.isRegistering = true
  }

  cancelRegistration() {
    this.isRegistering = false
    this.store.dispatch(registerCancel())
  }

  doRegister() {
    this.logger.info(("Registration attempt: " + this.r['firstname'].value + " " + this.r['lastname'].value + " " + this.r['username'].value + " " + this.r['password'].value))
    this.submitted = true
    this.store.dispatch(register({
      firstname: this.r['firstname'].value,
      lastname: this.r['lastname'].value,
      username: this.r['username'].value,
      password: this.r['password'].value,
    }))
    this.isRegistering = false
    this.registerForm.reset()
  }

  alertMe() {
    this.store.select(selectUserId).subscribe(userId => alert("ha ha " + userId))
  }

}
