import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-auth',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  credentials = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn(this.credentials.controls.email.value, this.credentials.controls.password.value).then(res => {
      console.log(res);
      this.toastService.showToast('Sign in successful');
      this.router.navigate(['/tabs/home']);
    });
  }
  signUp(): void {
    this.router.navigate(['/sign-up']);
  }
}
