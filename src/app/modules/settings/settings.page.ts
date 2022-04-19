import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth/service/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.signOut();
  }
}
