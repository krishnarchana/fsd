import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  route: string;
  visability;
  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      //if (location.path() != '') {
        this.route = location.path();
      //  this.visability = false;
      //} else {
      //  this.route = 'login';

      //}
      if(this.route =='/login' || this.route =='/home'){
      this.visability = true;
      }else{
      this.visability = false;
      }
    });
  }
}
