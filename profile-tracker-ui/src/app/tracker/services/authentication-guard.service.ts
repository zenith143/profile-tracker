import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthentiationGuardService implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate() {
        if (localStorage.getItem("user")) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}