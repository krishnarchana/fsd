import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

import { AlertService } from './alert.service';
import { LoginAuthenticationService } from './loginAuth.service';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent {
  model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: LoginAuthenticationService,
        public alertService: AlertService) {
          }

    login() {

    let extra:any = [{
            "id": "1",
            "title": "Angular 2 - Getting Started",
            "summary": "In this article, you will learn how to start working with Angular 2."
        }, {
            "id": "2",
            "title": "Show data using Angular 2",
            "summary": "In this article, you will learn how to display data using Angular 2."
        }, {
            "id": "3",
            "title": "Cascading DropDown In Angular 2",
            "summary": "In this article, you will learn how to use cascading DropDownList using Angular 2."
        }, {
            "id": "4",
            "title": "Show data using Web API and Service in Angular 2",
            "summary": "In this article, you will learn how to bind data with observable and display using service and Web API in Angular 2."
        }, {
            "id": "5",
            "title": "Angular 2 - File Upload using Web API",
            "summary": "In this article, you will learn how to File Upload using Web API in Angular 2."
        }];

    let navextras: NavigationExtras={queryParams:{"message": JSON.stringify(extra)}};

      this.authenticationService.login(this.model.userid, this.model.password)
        .subscribe(
            data => {
                console.log("good",navextras);
                 this.router.navigate(['/userPage'], navextras);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
