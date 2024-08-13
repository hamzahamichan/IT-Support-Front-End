import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Equipement} from "../../Model/equipement.model";
import {EquipementService} from "../../services/equipement.service";


@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {
  equipement$ !: Observable<Equipement[]>;
  errorMessage!:string;

  constructor(private equipementService: EquipementService) {}

  ngOnInit(): void {
    this.loadEquipements();
  }

  // Méthode pour charger la liste des équipements
  loadEquipements(): void {
    this.equipement$ = this.equipementService.getEquipement();
  }

  // Méthode pour supprimer un équipement
  deleteEquipement(id_equipement: number): void {
    this.equipementService.deleteEquipement(id_equipement).subscribe(() => {
      console.log('Équipement supprimé avec succès');
      this.loadEquipements(); // Recharger la liste des équipements après suppression
    }, error => {
      console.error('Erreur lors de la suppression de l\'équipement', error);
    });
  }
}
