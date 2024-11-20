import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListComponentComponent } from './ticket-list-component.component';

describe('TicketListComponentComponent', () => {
  let component: TicketListComponentComponent;
  let fixture: ComponentFixture<TicketListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
