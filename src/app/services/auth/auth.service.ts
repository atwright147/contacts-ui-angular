import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AuthCreds {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly loginUrl = '/api/v1/auth/login';
  private readonly logoutUrl = '/api/v1/auth/login';
  public readonly isLoggedIn = false;

  constructor(
    private readonly http: HttpClient,
  ) { }

  login(creds: AuthCreds) {
    return this.http.post(this.loginUrl, creds);
  }

  logout() {
    return this.http.get(this.loginUrl);
  }
}
