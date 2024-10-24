import { Component, input, model } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Contrato } from '../../core/entities/contrato';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [
    MatDatepickerModule
  ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  selectedDate = model<Date>(new Date())
  contratosDoDia: Contrato[] = []
  constructor(

  ) {

  }

}
