import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryOrderComponent } from 'src/dispatch-managment/delivery-order/delivery-order.component';
import { ScheduleDeliveryListComponent } from 'src/dispatch-managment/schedule-delivery-list/schedule-delivery-list.component';
import { TruckPlanningListComponent } from 'src/dispatch-managment/truck-planning-list/truck-planning-list.component';
import { TruckPlanningComponent } from 'src/dispatch-managment/truck-planning/truck-planning.component';
import { VehiclePassIssueComponent } from 'src/vehicle/vehicle-pass-issue/vehicle-pass-issue.component';
import { VehicleComponent } from 'src/vehicle/vehicle.component';
import { AppComponent } from './app.component';
import { ExitGateComponent } from "../dispatch-managment/exit-gate/exit-gate.component";

const routes: Routes = [
  { path: 'vehicle', component: VehicleComponent },
  { path:'vehicle-pass',component:VehiclePassIssueComponent},
  {path:'delivery-order',component:ScheduleDeliveryListComponent},
  {path:'delivery-order-modify',component:DeliveryOrderComponent},
  {path:'truck-planning-list',component:TruckPlanningListComponent},
  {path:'truck-planning-modify',component:TruckPlanningComponent},
  {path:'exit-gate',component:ExitGateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
