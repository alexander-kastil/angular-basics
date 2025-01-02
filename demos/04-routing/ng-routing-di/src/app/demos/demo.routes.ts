import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ChildRoutesComponent } from './samples/child-routes/child-routes.component';
import { LazyLoadingComponent } from './samples/lazy-loading/lazy-loading.component';
import { ParamMapComponent } from './samples/paramMap/param-map/param-map.component';
import { PmChildComponent } from './samples/paramMap/pm-child/pm-child.component';
import { PreloadComponent } from './samples/preload/preload.component';
import { RouteGuardsComponent } from './samples/route-guards/route-guards.component';
import { RoutingBasicsComponent } from './samples/routing-basics/routing-basics.component';
import { StandaloneComponent } from './samples/standalone/standalone.component';
import { ProvidersComponent } from './samples/providers/providers.component';
import { DependencyInjectionComponent } from './samples/dependency-injection/dependency-injection.component';
import { NgModulesComponent } from './samples/ng-modules/ng-modules.component';
import { demosResolver } from './samples/preload/demos.resolver';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'providers', component: ProvidersComponent },
      { path: 'modules', component: NgModulesComponent },
      { path: 'dependency-injection', component: DependencyInjectionComponent },
      { path: 'routing-basics', component: RoutingBasicsComponent },
      { path: 'routing-config', component: ChildRoutesComponent },
      { path: 'route-guards', component: RouteGuardsComponent },
      {
        path: 'standalone-comp',
        component: StandaloneComponent,
      },
      {
        path: 'lazy-loading',
        component: LazyLoadingComponent
      },
      {
        path: 'param-map',
        component: ParamMapComponent,
        children: [
          { path: ':id', component: PmChildComponent }
        ],
      },
      {
        path: 'preload',
        component: PreloadComponent,
        resolve: { demos: demosResolver }
      }
    ],
  },
];
