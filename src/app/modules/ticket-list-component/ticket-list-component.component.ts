import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../core/service/ticket.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-ticket-list',
  templateUrl: './ticket-list-component.component.html',
  styleUrls: ['./ticket-list-component.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule
  ],
})
export class TicketListComponentComponent implements OnInit {
  tickets: any[] = [];
  columns = ['tradeLocation', 'sourceAccount', 'budget', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private ticketService: TicketService  , private router: Router) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe((data) => {
      console.log('data',data);
      
      this.tickets = data;
      this.dataSource = new MatTableDataSource(this.tickets);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteTicket(id: any): void {
    this.ticketService.deleteTicket(id).subscribe(() => {
      this.loadTickets(); 
    });
  }

  editTicket(ticket: any): void {
    this.router.navigate(['/tickets/new'], { queryParams: { 
      id: ticket.id,
      tradeLocation: ticket.tradeLocation,
      sourceAccount: ticket.sourceAccount,
      budget: ticket.budget
    }});
  }
}
