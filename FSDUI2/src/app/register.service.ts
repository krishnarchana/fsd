import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RegisterUser } from './registerUser';

@Injectable()
export class RegistrationService {
    constructor(public model: RegisterUser, private http: Http) {}

    register(model: RegisterUser) {
    //  var headers = new Headers();
      //var creds = 'firstname=' + model.firstname + '&lastname='+model.lastname + '&dateofbirth='+model.dateofbirth + '&address='+model.address + '&contactno='+model.contactno + '&email='+model.email + '&password='+model.password + '&confirmPassword='+model.confirmPassword;
      //headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:8080/RESTfulExample/rest/hello/gopi')
            .map((response: Response) => response);
    }
}
