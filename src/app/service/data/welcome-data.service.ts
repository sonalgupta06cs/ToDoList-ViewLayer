import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
    constructor(public message: String) {

    }
}

@Injectable({
    providedIn: 'root'
})
export class WelcomeDataService {

    /* Angular provides us a module called "HttpClientModule" and as part of it,
     we have something called HTTPClient, We can use HTTPClient to get, post, put, delete
     all kinds of http request.  to invoke the services using HttpModule,
     All we have to say this is the url and this is the data */
     constructor(private httpClient: HttpClient) { }

    /* Method to retrive the data from the backend service, to invoke the service layer
     This method returns an observable, when i go to network, and clear it, no activity
     is performed.In network tab, you can see what request are sent from the client(front-end) application
     to our server application(back-end), but observable is being returned.However, this call is
     not going over the network.
     some httpservices might take really a long time to execute(uptp 3 to 5 sec).
     If we do it synchronously, we would have to wait for the response, mean while entire browser will hang.
     that's why we should call all the httpservices asynchronously.
     Observables are the best approach to implement asynchronous communication.

     What Angular does is, it makes extensive use of observables as the interface for most of the
     asynchronous operations.
     If you want to make an ajax request using httpmodule, angular internally makes use of observables.

     We will see later what happens when it returns error n all(we can define all that as part of an
     observable)

     So, we will have to use subscribe

     Observables helps us to define that this is the service i want to call, this is the data i am expexting
     back, this is what you should do when you get error back, but it doesnot invloke the service
     until you subscribe for it.
     */

    // Request to below service method call
    // http://localhost:8081/hello-world-bean
    executeHelloWorldBeanService() {

        return this.httpClient.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
       // console.log(this.httpClient.get('http://localhost:8081/hello-world-bean'));
        // console.log('execute hello world service');
    }


    // Request to below service method call
    // http://localhost:8081/hello-world-bean/path-variable/sonal
     executeHelloWorldBeanServiceWithPathVariable(name) {

        // Template literals are enclosed by back-tick `
        return this.httpClient.get<HelloWorldBean>(`http://localhost:8081/hello-world-bean/path-variable/${name}`);
       // console.log(this.httpClient.get('http://localhost:8081/hello-world-bean'));
        // console.log('execute hello world service');
    }
}
