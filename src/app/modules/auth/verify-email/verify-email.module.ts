import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyEmailComponent } from './verify-email.component';
import { RouterModule } from '@angular/router';
import { verifyEmailRoutes } from './verify-email.routing';



@NgModule({
  declarations: [
    VerifyEmailComponent
  ],
  imports: [
    RouterModule.forChild(verifyEmailRoutes),
    CommonModule
  ]
})
export class VerifyEmailModule { }
