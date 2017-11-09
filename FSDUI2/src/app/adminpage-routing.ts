import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './adminpage.component';

const adminpageRoutes: Routes = [
  { path: 'adminPage', component: AdminPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(adminpageRoutes) ],
  exports: [ RouterModule ]
})
export class AdminPageRoutingModule { }
