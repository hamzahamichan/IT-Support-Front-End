import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquipementService} from "../services/equipement.service";

@Component({
  selector: 'app-delete-equi',
  templateUrl: './delete-equi.component.html',
  styleUrls: ['./delete-equi.component.css']
})
export class DeleteEquiComponent {
  deleteForm: FormGroup;

  constructor(private fb: FormBuilder, private equipementService: EquipementService) {
    this.deleteForm = this.fb.group({
      id_equipement: ['', Validators.required]
    });
  }

  onDelete() {
    const id = this.deleteForm.value.id_equipement;
    this.equipementService.deleteEquipement(id).subscribe({
      next: () => alert('Équipement supprimé avec succès'),
      error: (err) => alert('Erreur lors de la suppression de l\'équipement: ' + err)
    });
  }
}
