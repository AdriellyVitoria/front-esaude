import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-clinica-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    NgClass,
    RouterOutlet
  ],
  templateUrl: './clinica-page.component.html',
  styleUrl: './clinica-page.component.css'
})
export class ClinicaPageComponent {
  rotaSelecionada: WritableSignal<string> = signal('home')

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        this.rotaSelecionada.set(event.urlAfterRedirects.substring(1))
      });
  }
}
