import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from './alert.service';
import { LoginAuthenticationService } from './loginAuth.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  model: any = {};
    loading = false;
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: LoginAuthenticationService,
        private alertService: AlertService) {
          }

    ngOnInit() {
        // reset login status
      //  this.authenticationService.logout();
      console.log("here2");
      this.authenticationService.getData()
          .subscribe(
              data => {
                  console.log("good",data);

              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
      this.authenticationService.login(this.model.email, this.model.password)
        .subscribe(
            data => {
                console.log("good",data);
                 this.router.navigate(['/userPage']);                 
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
