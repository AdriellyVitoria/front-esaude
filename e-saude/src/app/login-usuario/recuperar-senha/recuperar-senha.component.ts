import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink,
    MatSnackBarModule
  ],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.css'
})
export class RecuperarSenhaComponent {
  recuperarSenhaForm: FormGroup

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar
  ) {
    this.recuperarSenhaForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  enviarToken(): void {

  }
}
