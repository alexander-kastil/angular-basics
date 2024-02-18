import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AsyncPipeComponent } from './samples/async-pipe/async-pipe.component';
import { CreatingObservableComponent } from './samples/creating-observables/creating-observable.component';
import { EventBusComponent } from './samples/event-bus/event-bus.component';
import { FormControlsComponent } from './samples/form-controls/form-controls.component';
import { LoadingHostComponent } from './samples/loading-host/loading-host.component';
import { NgrxDataComponent } from './samples/ngrx-data/ngrx-data.component';
import { OperatorsComponent } from './samples/operators/operators.component';
import { ResponsiveScreenComponent } from './samples/responsive-screen/responsive-screen.component';
import { SignPadComponent } from './samples/sign-pad/sign-pad.component';
import { SignalsBasicsComponent } from './samples/signals-basics/signals-basics.component';
import { SignalsEventBusComponent } from './samples/signals-event-bus/signals-event-bus.component';
import { StatefulComponent } from './samples/stateful/stateful.component';
import { UnsubscribingComponent } from './samples/unsubscribing/unsubscribing.component';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'creating', component: CreatingObservableComponent },
      { path: 'mouse-events', component: SignPadComponent },
      { path: 'form-controls', component: FormControlsComponent },
      { path: 'operators', component: OperatorsComponent },
      { path: 'responsive-screen', component: ResponsiveScreenComponent },
      { path: 'unsubscribe', component: UnsubscribingComponent },
      { path: 'async-pipe', component: AsyncPipeComponent },
      { path: 'stateful-services', component: StatefulComponent },
      { path: 'event-bus', component: EventBusComponent },
      { path: 'loading', component: LoadingHostComponent },
      { path: 'ngrx-data', component: NgrxDataComponent },
      { path: 'signals-basics', component: SignalsBasicsComponent },
      { path: 'signals-bus', component: SignalsEventBusComponent },
    ],
  },
];