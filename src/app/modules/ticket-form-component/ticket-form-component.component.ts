import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TicketService } from '../../core/service/ticket.service';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  standalone: true,
  selector: 'app-ticket-form',
  templateUrl: './ticket-form-component.component.html',
  styleUrls: ['./ticket-form-component.component.scss'],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule
  ],
})
export class TicketFormComponentComponent implements OnInit {

  ticketForm: FormGroup;
  ticketId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.ticketForm = this.fb.group({
      tradeLocation: ['', Validators.required],
      sourceAccount: ['', Validators.required],
      budget: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        this.ticketId = params['id'];
        this.ticketForm.patchValue({
          tradeLocation: params['tradeLocation'],
          sourceAccount: params['sourceAccount'],
          budget: params['budget'],
        });
      }
    });
  }

  onSubmit(): void {
    const formValue = this.ticketForm.value;
    if (this.ticketForm.valid) {
      if (this.ticketId) {
        this.ticketService.updateTicket(this.ticketId.toString(), formValue).subscribe(
          (response) => {
            this.router.navigate(['/tickets']);
          },
          (error) => {
            console.error('Error updating ticket:', error);
          }
        );
      } else {
        this.ticketService.addTicket(formValue).subscribe(
          (response) => {
            this.router.navigate(['/tickets']);
          },
          (error) => {
            console.error('Error creating ticket:', error);
          }
        );
      }
    }
  }
  
}
