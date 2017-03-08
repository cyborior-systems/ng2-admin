import { Routes, RouterModule }  from '@angular/router';
import { TicketPage } from './allticket/ticket.component.ts';
import { NewTicketPage } from './newticket/newticket.component.ts';


export const routes = [
  { path: '', component: TicketPage, pathMatch: 'full' },
  { path: 'create', component: NewTicketPage, pathMatch: 'full' }
];

export const routing = RouterModule.forChild(routes)