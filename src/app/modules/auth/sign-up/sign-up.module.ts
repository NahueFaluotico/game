import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { authSignUpRoutes } from './sign-up.routing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    RouterModule.forChild(authSignUpRoutes),
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
