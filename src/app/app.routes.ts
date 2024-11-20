import { TicketListComponentComponent } from './modules/ticket-list-component/ticket-list-component.component';
import { TicketFormComponentComponent } from './modules/ticket-form-component/ticket-form-component.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketListComponentComponent },  
  { path: 'tickets/new', component: TicketFormComponentComponent }
];
