import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'http://localhost:3000/ticketConfirmation';
  
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getTickets(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`, { headers: this.headers });
  }

  addTicket(ticket: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, ticket, { headers: this.headers });
  }

  updateTicket(id: string, ticket: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, ticket, { headers: this.headers });
  }

  deleteTicket(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}
