import {Ticket} from "./Ticket.model";

export  interface TicketSupport{
 id_ticket:number;
 description:String;
date_creation: Date ;
Etat:Ticket;
id_panne?: number;  // Référence à une panne
id_equipement ?: number;

}
