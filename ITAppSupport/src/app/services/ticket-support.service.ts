import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ticket} from "../Model/Ticket.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketSupportService {

  constructor(private  http : HttpClient) { }
  createTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>("http://localhost:8081/ticket/addT", ticket);
  }
}
