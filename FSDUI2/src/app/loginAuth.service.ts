import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthenticationService {
private getURL = "http://localhost:8080/RESTfulExample/rest/hello/gopi";
    constructor(private http: Http) {}

    //getData():Observable<any>{
    //console.log("1212");
    //return this.http.get(this.getURL)
        //.map((res:Response) => res);
    //}
    //  return this.http.post('http://localhost:8080/RESTfulExample/rest', JSON.stringify({ email: email, password: password }))
    getData(){

    }

    login(userid: string, password: string) {

        return this.http.get('http://localhost:8080/RESTfulExample/rest/hello/gopi')
            .map((response: Response) => response);

    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
    }
}
