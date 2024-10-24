import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tela-agendamento',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule
  ],
  templateUrl: './tela-agendamento.component.html',
  styleUrl: './tela-agendamento.component.css'
})
export class TelaAgendamentoComponent {

}
