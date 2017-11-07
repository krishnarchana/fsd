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

    login() {

    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
    }
}
