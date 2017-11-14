import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

@Component({
  templateUrl: './userpage.component.html'
})

export class UserPageComponent {
 public message:any[]=[];
 public msg:any;

    constructor(private route: ActivatedRoute) {

this.msg = this.route.snapshot.queryParams["message"];
this.message =JSON.parse(this.msg);
console.log(this.message);

//this.message = Array.of(this.message);
//console.log("data ", this.message.length);
//console.log(JSON.stringify(this.message));
     //let company = JSON.parse(params.get('company'));
    // console.log(JSON.stringify(company));
    }
}
