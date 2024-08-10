import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
import {Equipement} from "../Model/equipement.model";
import {EquipementService} from "../services/equipement.service";


@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {
  equipement$!: Observable<Equipement[]>;// Convention de nommage pour les Observables
  errorMessage !:string;
  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.equipement$ = this.equipementService.getEquipement().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return  throwError(err);
      })


    );
  }
}
