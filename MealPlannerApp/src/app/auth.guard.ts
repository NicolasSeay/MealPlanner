import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserState } from './reducers/user.reducer';
import { selectUserId } from './app.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private store: Store<UserState>) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userId = sessionStorage.getItem('userId')
        if (userId != null && parseInt(userId) > 0) {
            // authorised so return true
            return true
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate([''])
        return false
    }
}