import { createActionGroup, props } from '@ngrx/store';
import { appFeatureKey } from './app.state';

export const appActions = createActionGroup(
  {
    source: appFeatureKey,
    events: {
      setLoading: props<{ isLoading: boolean }>(),
    },
  }
);