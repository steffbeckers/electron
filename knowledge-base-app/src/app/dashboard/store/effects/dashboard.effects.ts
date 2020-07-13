import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as DashboardActions from '../actions/dashboard.actions';

@Injectable()
export class DashboardEffects {
  loadDashboards$ = createEffect(() => {
    return this.actions$.pipe(ofType(DashboardActions.loadDashboards));
  });

  constructor(private actions$: Actions) {}
}
