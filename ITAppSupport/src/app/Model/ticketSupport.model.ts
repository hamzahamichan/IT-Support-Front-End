import {Ticket} from "./Ticket.model";
import {Panne} from "./panne.model";

export  interface TicketSupport{
  description: string;
  date_creation: Date;
  etat: Ticket;
  id_equipement: number;
  panne: Panne;

}
