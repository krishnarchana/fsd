import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthenticationService {
private getURL = "http://localhost:8080/RESTfulExample/rest/hello/gopi";
    constructor(private http: Http) {}

    getData():Observable<any>{
    console.log("1212");
    return this.http.get(this.getURL)
        .map((res:Response) => res);
    }

    login(email: string, password: string) {
        return this.http.post('http://localhost:8080/RESTfulExample/rest/hello/login', JSON.stringify({ email: email, password: password }))
            .map((response: Response) => response);
          //  response.json();
                // login successful if there's a jwt token in the response
                //let user = response.json();
                //if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify(user));
              //  }
          //  });
    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
    }
}
