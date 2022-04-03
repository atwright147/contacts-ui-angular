import { Component } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isLoggedIn = this.authService.isLoggedIn;

  constructor(
    private readonly authService: AuthService,
  ) { }

  handleLogin(): void {
    this.authService.login({ email: '', password: '' });
  }

  handleLogout(): void {
    this.authService.logout();
  }
}
