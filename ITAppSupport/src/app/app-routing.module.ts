// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EquipementComponent } from './equipement/equipement.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Page d'accueil par défaut
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminTemplateComponent, children: [
      { path: 'navbar', component: NavBarComponent },
      { path: 'equipementList', component: EquipementComponent },
      { path: 'ticket', component: TicketSupportComponent },
      { path: '', redirectTo: 'navbar', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' } // Redirection pour les routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
