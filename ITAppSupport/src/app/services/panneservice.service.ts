import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Panne} from "../Model/panne.model";

@Injectable({
  providedIn: 'root'
})
export class PanneserviceService {
  private apiUrl='http://localhost:8081/panne/list';
  private baseUrl ='http://localhost:8081/Panne_List/add'
  constructor(private http:HttpClient) { }

  public getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(this.apiUrl);
  }

  public addPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(`${this.baseUrl}/pannes`, panne);
  }
}
