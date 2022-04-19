import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/service/auth.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  credentials = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor(private auth: AuthService, private userService: UserService, private ngZone: NgZone, private router: Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.auth.registerUser(this.credentials.controls.email.value, this.credentials.controls.password.value).then(res => {
      console.log(res);
      if (res.user) {
        this.auth.sendVerificationMail().then(() => {
          console.log('Verification email sent');
        }).catch(err => {
          console.log(err);
        });
        if (!res.user.displayName) {
          res.user.displayName = this.credentials.controls.name.value + ' ' + this.credentials.controls.lastName.value;
        }
        this.userService.setUserData(res.user).then(() => {
          console.log('Exito');
        });
      }
    });
  }
  goToSignIn() {
    this.ngZone.run(() => {
      this.router.navigate(['/sign-in']);
    });
  }

}
