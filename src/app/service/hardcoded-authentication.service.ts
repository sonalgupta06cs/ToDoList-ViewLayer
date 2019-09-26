import { Injectable } from '@angular/core';

// This service is used when you need to authenticate the user.
@Injectable({
    providedIn: 'root'
})
export class HardcodedAuthenticationService {

    constructor() { }

    // Method to check the authenticate the user
    authenticate(username, password) {

        // console.log('before ' + this.isUserLoggedIn());
        if (username === 'in28minutes' && password === 'dummy') {
            sessionStorage.setItem('authenticatedUser', username);
            // console.log('after ' + this.isUserLoggedIn());
            return true;
        } else {
            return false;
        }

    }

    // Method to check if user is logged in or not and then get the
    // value from session storage and return true, else false.
    isUserLoggedIn() {
         // console.log('calling  this.isUserLoggedIn()');
        let user: String;
        user = sessionStorage.getItem('authenticatedUser');

        return !(user === null);

    }

    logoutUser() {
        sessionStorage.removeItem('authenticatedUser');
    }


}
