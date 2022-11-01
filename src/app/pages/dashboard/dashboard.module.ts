import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormatDatePipe } from './../../shared/pipes/date-format.pipe';
import { DashboardComponent } from './dashboard.component';
import { RequestsEffects } from './store/requests.effect';
import { RequestsFacade } from './store/requests.facade';
import { REQUESTS_FEATURE_NAME } from './store/requests.state';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { requestsReducer } from './store/requests.reducer';

@NgModule({
  declarations: [DashboardComponent, FormatDatePipe],

  imports: [
    CommonModule,
    SharedModule,
    TableModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([RequestsEffects]),
    StoreModule.forFeature(REQUESTS_FEATURE_NAME, requestsReducer),
  ],
  providers: [RequestsFacade],
})
export class DashboardModule {}
