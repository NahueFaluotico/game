import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './sign-out.component';
import { RouterModule } from '@angular/router';
import { authSignOutRoutes } from './sign-out.routing';



@NgModule({
  declarations: [
    SignOutComponent
  ],
  imports: [
    RouterModule.forChild(authSignOutRoutes),
    CommonModule
  ]
})
export class SignOutModule { }
