import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { LoginRequest } from '../models/auth/login-request';
import { TokenModel } from '../models/auth/token-model';
import { CadastroRequest } from '../models/auth/cadastro-request';
import { Cliente } from '../models/auth/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api

  constructor(
    private readonly http: HttpClient
  ) { }

  login(request: LoginRequest): Observable<TokenModel> {
    return this.http.post<TokenModel>(`${this.api}/login/`, request)
  }

  cadastro(request: CadastroRequest): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.api}/api/cliente/`, request)
  }
}
