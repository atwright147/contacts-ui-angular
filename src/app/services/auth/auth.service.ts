import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

export interface AuthCreds {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = '/api/v1/auth/login';

  constructor(
    private readonly http: HttpClient,
  ) { }

  login(creds: AuthCreds) {
    return this.http.post(this.loginUrl, creds);
  }
}
