import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/actions/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private store: Store, private router: Router) {}

  logout() {
    this.store.dispatch(logout())
    sessionStorage.setItem("userId", "-1")
    this.router.navigate(["/"])
  }

}
