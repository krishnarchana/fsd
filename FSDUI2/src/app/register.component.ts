import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('birthDate')birthDate: string;
  constructor(
    public model: RegisterUser,
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegistrationService,
    private alertService: AlertService,
    public loginComponent: LoginComponent){
   }

   ngAfterViewChecked(){
    //document.getElementById('loginInput').value = '123344565';
    var input =   (<HTMLInputElement>document.getElementById('dateField'));
    //  var input = document.getElementById("dateField");
      var today = new Date();
      var day = new String(today.getDate());

      // Set month to string to add leading 0
      var mon = new String(today.getMonth()+1); //January is 0!
      var yr = new String(today.getFullYear());

      if(mon.length < 2) { mon = "0" + mon; }
      if(day.length < 2) { day = "0" + day; }

      var date =  yr + '-' + mon + '-' + day ;

      input.disabled = false;
      input.setAttribute('max', date);
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
