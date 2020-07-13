import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from './store/reducers/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/dashboard.effects';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature(
      fromDashboard.dashboardFeatureKey,
      fromDashboard.reducer
    ),
    EffectsModule.forFeature([DashboardEffects]),
  ],
})
export class DashboardModule {}
