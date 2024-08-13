import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { EquipementComponent } from './Equipement gestion/equipement/equipement.component';
import { TicketSupportComponent } from './ticket-support/ticket-support.component';
import {DeleteEquiComponent} from "./delete-equi/delete-equi.component";
import {AjouterEquipementComponent} from "./ajouter-equipement/ajouter-equipement.component";
// Assurez-vous que ce composant existe

const routes: Routes = [
  { path: 'equipementList', component: EquipementComponent },
  { path: 'ticket', component: TicketSupportComponent },
  {path:"delEqui",component:DeleteEquiComponent},
  {path:"newEquipement",component:AjouterEquipementComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminTemplateComponent, children: [

      { path: '', redirectTo: 'equipementList', pathMatch: 'full' } // Redirection vers la liste des équipements par défaut
    ]
  },
// Route pour le profil
  { path: '**', redirectTo: 'home' } // Redirection pour les routes non trouvées vers la page d'accueil
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
