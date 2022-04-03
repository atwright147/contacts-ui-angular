import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthCreds, AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = 'admin@example.com';
  password = 'password';

  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.info(form.value);

    this.authService.login(form.value as AuthCreds).subscribe();
  }

}
