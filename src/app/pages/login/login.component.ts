import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { AuthCreds, AuthService } from '../../services/auth/auth.service';

const defaults = {
  email: 'admin@example.com',
  password: 'password',
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  validate;
  loginForm: FormGroup;

  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(defaults.email, [Validators.required]),
      password: new FormControl(defaults.password)
    })
  }

  onSubmit() {
    console.info(this.loginForm.value);
    this.validate = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe();
    }
  }
}
