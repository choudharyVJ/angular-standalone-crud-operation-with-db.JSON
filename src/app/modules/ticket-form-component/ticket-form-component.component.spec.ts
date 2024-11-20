import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormComponentComponent } from './ticket-form-component.component';

describe('TicketFormComponentComponent', () => {
  let component: TicketFormComponentComponent;
  let fixture: ComponentFixture<TicketFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
