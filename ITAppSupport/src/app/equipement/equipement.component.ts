import {Component, OnInit} from '@angular/core';
import {EquipementService} from "../services/equipement.service";
import {catchError, Observable, throwError} from "rxjs";
import {Equipement} from "../Model/equipement.model";

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit{
  equipement$!:Observable<Equipement[]>;
  errorMessage!:string;
  constructor(private equipementService:EquipementService) {
  }
  ngOnInit(): void {
    this.equipement$=this.equipementService.getEquipement().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    )
  }



}
