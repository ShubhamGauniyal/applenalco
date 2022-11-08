import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePassIssueComponent } from './vehicle-pass-issue.component';

describe('VehiclePassIssueComponent', () => {
  let component: VehiclePassIssueComponent;
  let fixture: ComponentFixture<VehiclePassIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePassIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePassIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
