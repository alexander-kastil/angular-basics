import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ComponentClassComponent } from './samples/component-class/component-class.component';
import { ComponentEventsComponent } from './samples/component-events/component-events.component';
import { ComponentTestComponent } from './samples/component-test/component-test.component';
import { ComponentWriteComponent } from './samples/component-write/component-write.component';
import { CypressComponent } from './samples/cypress/cypress.component';
import { DirectiveHostComponent } from './samples/directive/directive-host/directive-host.component';
import { MaterialAsyncComponent } from './samples/component-material-async/material-async.component';
import { MockHostComponent } from './samples/component-mocking/mock-host/mock-host.component';
import { SpyHostComponent } from './samples/component-mocking/spy-host/spy-host.component';
import { TestPipeComponent } from './samples/pipe/test-pipe.component';
import { SimpleServiceComponent } from './samples/simple-service/simple-service.component';
import { UnitTestingComponent } from './samples/basic-tests/unit-testing.component';
import { IntegrationTestComponent } from './samples/component-integration/integration-test.component';
import { MaterialComponent } from './samples/component-harness/material.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'basic-tests', component: UnitTestingComponent },
      { path: 'component-events', component: ComponentEventsComponent },
      { path: 'component-write', component: ComponentWriteComponent },
      { path: 'testpipe', component: TestPipeComponent },
      { path: 'directive', component: DirectiveHostComponent },
      { path: 'simpleservice', component: SimpleServiceComponent },
      { path: 'component-test', component: ComponentTestComponent },
      { path: 'integrationtests', component: IntegrationTestComponent },
      { path: 'mock', component: MockHostComponent },
      { path: 'material-async', component: MaterialAsyncComponent },
      { path: 'material', component: MaterialComponent },
      { path: 'cypress', component: CypressComponent },
      { path: 'component-class', component: ComponentClassComponent },
      { path: 'spy', component: SpyHostComponent }
    ],
  },
];
