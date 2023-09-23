import { createFeature, createReducer, on } from '@ngrx/store';
import { appActions } from './app.actions';
import { MatDrawerMode } from '@angular/material/sidenav';

export interface AppState {
  appinit: boolean;
}

export const initialAppState: AppState = {
  appinit: false,
};

export const appState = createFeature({
  name: 'app',
  reducer: createReducer(
    initialAppState,

  )
})
