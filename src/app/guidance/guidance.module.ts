import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
// GuidanceRouteModule is intentionally NOT imported here.
// Routes are registered inline in AppRoutingModule under main.children (outlet: 'div')
// to match My Portal's flat non-lazy routing architecture (useHash: true).
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  declarations: [AppointmentHistoryComponent, ApiIntegrationComponent],
  entryComponents: []
})
export class GuidanceModule { }
