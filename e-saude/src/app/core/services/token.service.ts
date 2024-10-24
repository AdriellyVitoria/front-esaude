import { Injectable } from '@angular/core';
import { TokenModel } from '../models/auth/token-model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private key = 'token';

  salvarToken(token: TokenModel) {
    return localStorage.setItem(this.key, JSON.stringify(token));
  }

  excluirToken() {
    localStorage.removeItem(this.key);
  }

  getToken(): TokenModel | null {
    const tokenString = localStorage.getItem(this.key)
    if (!tokenString) return null
    return JSON.parse(tokenString)
  }

  possuiToken(): boolean {
    return !!this.getToken();
  }
}
