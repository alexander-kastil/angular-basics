import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ClassesComponent } from './samples/classes/classes.component';
import { FunctionsComponent } from './samples/functions/functions.component';
import { InterfacesComponent } from './samples/interfaces/interfaces.component';
import { ObjectsComponent } from './samples/objects/objects.component';
import { ServicesComponent } from './samples/services/services.component';
import { TypesComponent } from './samples/types/types.component';
import { UtilsComponent } from './samples/utils/utils.component';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'types', component: TypesComponent },
      { path: 'utils', component: UtilsComponent },
      { path: 'objects', component: ObjectsComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'functions', component: FunctionsComponent },
      { path: 'interfaces', component: InterfacesComponent },
      { path: 'services', component: ServicesComponent },
    ],
  },
];
