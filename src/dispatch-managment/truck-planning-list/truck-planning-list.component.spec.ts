import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckPlanningListComponent } from './truck-planning-list.component';

describe('TruckPlanningListComponent', () => {
  let component: TruckPlanningListComponent;
  let fixture: ComponentFixture<TruckPlanningListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckPlanningListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckPlanningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
