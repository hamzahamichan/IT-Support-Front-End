import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Equipement} from "../Model/equipement.model";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
private readonly apiUrl : string ='http://localhost:8081/equipement/getAll';
  private baseUrl = 'http://localhost:8081/equipement';
  constructor(private http:HttpClient) { }
 private apiU='http://localhost:8081/equipement/add';
  public getEquipement(): Observable<Equipement[]> {
    return this.http.get<Equipement[]>(this.apiUrl);
  }
  deleteEquipement(id_equipement : number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id_equipement}`);
  }

  ajouterEquipement(equipement: Equipement): Observable<any> {
    return this.http.post(this.apiU, equipement);
  }

}
