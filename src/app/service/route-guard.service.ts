import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

// This service is used all the time to verify if the user is logged in or not, to show the post login links
@Injectable({
    providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

    constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService,
        private routerr: Router) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
            return true;
        }
        // Redirect to login page if user is not logged in
        this.routerr.navigate(['login']);
        return false;
    }
}
