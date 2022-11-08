import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDeliveryListComponent } from './schedule-delivery-list.component';

describe('ScheduleDeliveryListComponent', () => {
  let component: ScheduleDeliveryListComponent;
  let fixture: ComponentFixture<ScheduleDeliveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDeliveryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleDeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
