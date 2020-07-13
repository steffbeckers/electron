import { Action, createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';

export const dashboardFeatureKey = 'dashboard';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(DashboardActions.loadDashboards, (state) => state)
);
