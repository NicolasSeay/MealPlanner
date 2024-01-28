import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router) {}

    canActivate() {
        const userId = sessionStorage.getItem('userId')
        if (userId != null && parseInt(userId) != -1) {
            // authorised so return true
            return true
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/'])
        return false
    }
}