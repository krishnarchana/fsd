import { Component } from '@angular/core';
//import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
//import { NativeDateAdapter } from '@angular/material';

@Component({
  moduleId: module.id,
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  register() {
      this.loading = true;
      //this.authenticationService.login(this.model.email, this.model.password)
        //  .subscribe(
          //    data => {
          //        this.router.navigate([this.returnUrl]);
          //    },
          //    error => {
            //      this.alertService.error(error);
          //        this.loading = false;
          //    });
  }
}
