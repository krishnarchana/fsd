import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
//import { NativeDateAdapter } from '@angular/material';
import { RegisterUser } from './registerUser';
import { RegistrationService } from './register.service';
import { AlertService } from './alert.service';
import { LoginComponent } from './login.component';

@Component({
  moduleId: module.id,
  templateUrl: './register.component.html',
  providers: [RegisterUser, LoginComponent]
})

export class RegisterComponent implements OnInit {
  //model: any = {};
  loading = false;
  constructor(
    public model: RegisterUser,
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegistrationService,
    private alertService: AlertService,
    public loginComponent: LoginComponent){
   }

  ngOnInit(){ }

  register() {
      this.loading = true;
      console.log(this.model);
      this.regService.register(this.model)
          .subscribe(
              data => {
                console.log("good good:",data);
                this.router.navigate(['/login']);

                setTimeout(() => { this.loginComponent.alertService.success("User Registration Successfull!!"); }, 3000);


              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
