import { createFeature, createReducer, on } from '@ngrx/store';
import { appActions } from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  loading: boolean;
}

export const initialAppState: AppState = {
  loading: false,
};

export const appState = createFeature({
  name: appFeatureKey,
  reducer: createReducer(
    initialAppState,
    on(appActions.setLoading, (state, action) => ({
      ...state,
      loading: action.isLoading,
    })),
  )
})
