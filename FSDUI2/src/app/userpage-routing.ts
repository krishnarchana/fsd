import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './userpage.component';

const userpageRoutes: Routes = [
  { path: 'userPage', component: UserPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(userpageRoutes) ],
  exports: [ RouterModule ]
})
export class UserPageRoutingModule { }
