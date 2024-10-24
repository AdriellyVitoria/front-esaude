import { Routes } from '@angular/router';
import { ClinicaPageComponent } from './clinica/clinica-page/clinica-page.component';
import { TelaAgendamentoComponent } from './clinica/tela-agendamento/tela-agendamento.component';
import { TelaCadastroComponent } from './clinica/tela-cadastro/tela-cadastro.component';
import { RecuperarSenhaComponent } from './login-usuario/recuperar-senha/recuperar-senha.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { PrincipalComponent } from './clinica/principal/principal.component';

export const routes: Routes = [
  {
    path: '',
    component: ClinicaPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: PrincipalComponent
      },
      {
        path: 'agendamento',
        component: TelaAgendamentoComponent
      },
      {
        path: 'cadastro',
        component: TelaCadastroComponent
      }
    ],
  },
  {
    path: 'login-paciente',
    component: LoginUsuarioComponent,
    children: [
      {
        path: '',
        component: LoginUsuarioComponent,
      },
      {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent,
      }
    ]
  }

];
