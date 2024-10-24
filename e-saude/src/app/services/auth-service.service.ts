import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { LoginRequest } from '../core/models/auth/login-request';
import { TokenModel } from '../core/models/auth/token-model';
import { CadastroRequest } from '../core/models/auth/cadastro-request';
import { Cliente } from '../core/models/auth/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

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
