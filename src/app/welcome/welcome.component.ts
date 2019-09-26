import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    name: '';
    welcomeMessageFromService: String;
    errorMessage: String;

   // ActivatedRoute - what is the root that is currently active now?
   // we are making it as one of the argument to constructor, so that they can injected
   // in by the angular dependency injection framework.
  constructor(private route: ActivatedRoute, private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
      this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
      this.welcomeDataService.executeHelloWorldBeanService();
      /* subscribe is an ansynchronous call, this will not return the result, we have to mention
         when we get the results back, what should we do, we should create a function and tie
         it to subscribe() function
         Below is the asynchronous call so, it wont wait for the response, it will print 'last welocme me
         ssage line' and when it gets the response back, it calls handleSuccessfulRespose with the
         reponse that it has received.
      */
        this.welcomeDataService.executeHelloWorldBeanService().subscribe(
             response => this.handleSuccessfulResponse(response),
             errorRes => this.handleErrorResponse(errorRes)
        );
       console.log('last welcome message line');
  }

  // with path variable
  getWelcomeMessageWithParameter() {

        this.welcomeDataService.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
             response => this.handleSuccessfulResponse(response),
             errorRes => this.handleErrorResponse(errorRes)
        );
       // console.log('last welcome message line');
  }

  handleSuccessfulResponse(response) {
        // console.log(response);
        // console.log(response.message);
        this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(errorRes) {
      // console.log(errorRes);
      // console.log(errorRes.error);
      // console.log(errorRes.error.message);

        this.errorMessage = errorRes.error.message;
        // throw new Error('Method not implemented.');
  }




}
