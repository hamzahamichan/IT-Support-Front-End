import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketSupportService } from '../services/ticket-support.service';
import { EquipementService } from '../services/equipement.service';
import { Equipement } from '../Model/equipement.model';
import {Ticket} from "../Model/Ticket.model";

@Component({
  selector: 'app-ticket-support',
  templateUrl: './ticket-support.component.html',
  styleUrls: ['./ticket-support.component.css']
})
export class TicketSupportComponent implements OnInit {
  ticketForm: FormGroup;
  equipements: Equipement[] = [];
  statuts = Object.values(Ticket); // Utilisation de l'énumération Tichet pour les statuts

  constructor(
    private ticketService: TicketSupportService,
    private equipementService: EquipementService,
    private fb: FormBuilder
  ) {
    this.ticketForm = this.fb.group({
      description: ['', Validators.required],
      date_creation: [new Date(), Validators.required],
      statut: ['', Validators.required], // Renommé pour plus de clarté
      id_equipement: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.equipementService.getEquipement().subscribe((equipements) => (this.equipements = equipements));
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const newTicket: Ticket = this.ticketForm.value;
      this.ticketService.createTicket(newTicket).subscribe(response => {
        console.log('Ticket créé avec succès', response);
      });
    }
  }
}
