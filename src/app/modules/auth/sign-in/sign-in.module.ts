import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { authSignInRoutes } from './sign-in.routing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    RouterModule.forChild(authSignInRoutes),
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
