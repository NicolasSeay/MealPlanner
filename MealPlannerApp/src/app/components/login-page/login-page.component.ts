import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, register, registerCancel } from 'src/app/actions/user.actions';
import { Logger } from 'src/app/app.logger';
import { selectLoginError, selectRegisterError } from 'src/app/app.selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginError$: Observable<string>
  registerError$: Observable<string>
  loginForm!: FormGroup
  registerForm!: FormGroup
  loading = false
  submitted = false
  isRegistering = false

  constructor(private store: Store, private formBuilder: FormBuilder, private logger: Logger) {
    this.loginError$ = this.store.select(selectLoginError)
    this.registerError$ = this.store.select(selectRegisterError)
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName:  ['', Validators.required],
        userName:  ['', Validators.required],
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
    this.logger.info(("Registration attempt: " + this.r['firstName'].value + " " + this.r['lastName'].value + " " + this.r['userName'].value + " " + this.r['password'].value))
    this.submitted = true
    this.store.dispatch(register({
      firstName: this.r['firstName'].value,
      lastName: this.r['lastName'].value,
      userName: this.r['userName'].value,
      password: this.r['password'].value,
    }))
    this.isRegistering = false
    this.registerForm.reset()
  }

  alertMe() {
    alert("Ha ha!")
  }

}
