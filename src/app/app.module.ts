import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import {
  MatBadgeModule,
} from '@angular/material/badge';
import {
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import {
  MatButtonModule,
} from '@angular/material/button';
import {
  MatButtonToggleModule,
} from '@angular/material/button-toggle';
import {
  MatCardModule,
} from '@angular/material/card';
import {
  MatCheckboxModule,
} from '@angular/material/checkbox';
import {
  MatChipsModule,
} from '@angular/material/chips';
import {
  MatStepperModule,
} from '@angular/material/stepper';
import {
  MatDatepickerModule,
} from '@angular/material/datepicker';

import {
  MatDialogModule,
} from '@angular/material/dialog';

import {
  MatDividerModule,
} from '@angular/material/divider';

import {
  MatExpansionModule,
} from '@angular/material/expansion';

import {
  MatGridListModule,
} from '@angular/material/grid-list';

import {
  MatIconModule,
} from '@angular/material/icon';

import {
  MatInputModule,
} from '@angular/material/input';
import {
  MatListModule,
} from '@angular/material/list';
import {
  MatMenuModule,
} from '@angular/material/menu';

import {
  MatPaginatorModule,
} from '@angular/material/paginator';
import {
  MatProgressBarModule,
} from '@angular/material/progress-bar';
import {
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import {
  MatRadioModule,
} from '@angular/material/radio';

import {
  MatSelectModule,
} from '@angular/material/select';
import {
  MatSidenavModule,
} from '@angular/material/sidenav';
import {
  MatSliderModule,
} from '@angular/material/slider';
import {
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import {
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import {
  MatSortModule,
} from '@angular/material/sort';
import {
  MatTableModule,
} from '@angular/material/table';
import {
  MatTabsModule,
} from '@angular/material/tabs';
import {
  MatToolbarModule,
} from '@angular/material/toolbar';
import {
  MatTooltipModule,
} from '@angular/material/tooltip';
import {
  MatTreeModule,
} from '@angular/material/tree';
import {
  PortalModule,
} from '@angular/cdk/portal';
import {
  ScrollingModule,
} from '@angular/cdk/scrolling';
import {
  CdkStepperModule,
} from '@angular/cdk/stepper';
import {
  CdkTableModule,
} from '@angular/cdk/table';
import {
  CdkTreeModule,
} from '@angular/cdk/tree';
import {
  DragDropModule,
} from '@angular/cdk/drag-drop';
import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiclePassIssueComponent } from 'src/vehicle/vehicle-pass-issue/vehicle-pass-issue.component';
import { VehicleComponent } from 'src/vehicle/vehicle.component';
import { DeliveryOrderComponent } from 'src/dispatch-managment/delivery-order/delivery-order.component';
import { ScheduleDeliveryListComponent } from 'src/dispatch-managment/schedule-delivery-list/schedule-delivery-list.component';
import { TruckPlanningListComponent } from '../dispatch-managment/truck-planning-list/truck-planning-list.component';
import { TruckPlanningComponent } from 'src/dispatch-managment/truck-planning/truck-planning.component';
import { TwoDigitDecimaNumberDirective } from './two-digit-decima-number-directive.directive';
import { ExitGateComponent } from '../dispatch-managment/exit-gate/exit-gate.component';
import { ApiDataService } from "../services/api-data.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VehiclePassIssueComponent,
    VehicleComponent,
    DeliveryOrderComponent,
    ScheduleDeliveryListComponent,
    TruckPlanningComponent,
    TruckPlanningListComponent,
    TwoDigitDecimaNumberDirective,
    ExitGateComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    HttpClientModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
