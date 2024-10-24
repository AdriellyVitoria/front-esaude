import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { TokenService } from '../core/services/token.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterLink,
    MatSnackBarModule
  ],
  templateUrl: './login-usuario.component.html',
  styleUrl: './login-usuario.component.css'
})
export class LoginUsuarioComponent {

  ocultarSenha = signal(true);
  loginForm: FormGroup

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  mudarOcultarSenha(event: MouseEvent): void {
    event.preventDefault();
    this.ocultarSenha.set(!this.ocultarSenha());
  }

  fazerLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: res => {
          this.tokenService.salvarToken(res)
          this.router.navigateByUrl('/agendamento')
        },
        error: () => {
          this.snackBar.open('Email ou senha incorretos', undefined, { duration: 5000 })
        }
      })
    }
  }
}
