import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // Default Values
    username = 'in28minutes';
    password = '';
    errorMessage = 'Invalid Credentials Username or password';
    invalidLogin = false;

    // Dependency Injection to inject the router
    constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

    ngOnInit() {
    }

    handleLogin() {

        if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
            // Redirect to welcome page
            this.router.navigate(['welcome',  this.username]);
            this.invalidLogin = false;
            console.log('In handlelogin method ' + this.username + ' ' + this.password);
        } else {
            this.invalidLogin = true;
        }
    }

}
