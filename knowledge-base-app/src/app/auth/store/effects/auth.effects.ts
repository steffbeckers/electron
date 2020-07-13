import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  loadAuths$ = createEffect(() => {
    return this.actions$.pipe(ofType(AuthActions.loadAuths));
  });

  constructor(private actions$: Actions) {}
}
