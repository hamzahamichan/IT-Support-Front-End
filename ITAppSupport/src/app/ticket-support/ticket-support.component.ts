import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketSupportService } from '../services/ticket-support.service';
import { EquipementService } from '../services/equipement.service';
import { Equipement } from '../Model/equipement.model';
import { Panne } from '../Model/panne.model';
import { Ticket } from "../Model/Ticket.model";
import { PanneserviceService } from "../services/panneservice.service";

@Component({
  selector: 'app-ticket-support',
  templateUrl: './ticket-support.component.html',
  styleUrls: ['./ticket-support.component.css']
})
export class TicketSupportComponent implements OnInit {
  ticketForm: FormGroup;
  equipements: Equipement[] = [];
  pannes: Panne[] = [];
  etat = Object.values(Ticket);

  constructor(
    private ticketService: TicketSupportService,
    private equipementService: EquipementService,
    private panneService: PanneserviceService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required],
      date_creation: [new Date(), Validators.required],
      etat: ['', Validators.required],
      id_equipement: ['', Validators.required],
      panne: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.equipementService.getEquipement().subscribe((equipements) => (this.equipements = equipements));
    this.panneService.getPannes().subscribe((pannes) => (this.pannes = pannes));
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticketData = this.ticketForm.value;

      const newTicket: Ticket = {
        ...ticketData,
        panne: { id_panne: ticketData.panne.id_panne },  // Format correct pour le backend
        id_equipement: ticketData.id_equipement
      };

      this.ticketService.createTicket(newTicket).subscribe(response => {
        console.log('Ticket créé avec succès', response);
      });
    }
  }
}
