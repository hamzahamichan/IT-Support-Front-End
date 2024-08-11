import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipement} from "../Model/equipement.model";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
private readonly apiUrl : string ='http://localhost:8081/equipement/getAll';
  constructor(private http:HttpClient) { }

  public getEquipement(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.apiUrl);
  }

}
