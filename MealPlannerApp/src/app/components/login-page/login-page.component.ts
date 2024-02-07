import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, register, registerBegin, registerCancel } from 'src/app/store/actions/user.actions';
import { Logger } from 'src/app/app.logger';
import { selectIsRegistering, selectLoginError, selectRegisterError } from 'src/app/store/selectors/app.selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginError$ = this.store.select(selectLoginError)
  registerError$ = this.store.select(selectRegisterError)
  isRegistering$ = this.store.select(selectIsRegistering)
  loginForm!: FormGroup
  registerForm!: FormGroup
  loading = false
  submitted = false

  constructor(private store: Store, private formBuilder: FormBuilder, private logger: Logger) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName:  [''],
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
    this.store.dispatch(registerBegin())
  }

  cancelRegistration() {
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
  }

  alertMe() {
    alert("Ha ha!")
  }

}
