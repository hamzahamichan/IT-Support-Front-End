import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EquipementService} from "../services/equipement.service";
// Assurez-vous d'importer votre service

@Component({
  selector: 'app-ajouter-equipement',
  templateUrl: './ajouter-equipement.component.html',
  styleUrls: ['./ajouter-equipement.component.css']
})
export class AjouterEquipementComponent implements OnInit {
  equipementForm!: FormGroup;

  constructor(private fb: FormBuilder, private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.equipementForm = this.fb.group({
      id_equipement: [null, Validators.required],
      nom: ['', Validators.required],
      type: ['', Validators.required],
      marque: ['', Validators.required],
      etats: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.equipementForm.valid) {
      this.equipementService.ajouterEquipement(this.equipementForm.value).subscribe(response => {
        console.log('Équipement ajouté avec succès!', response);
      });
    }
  }
}
