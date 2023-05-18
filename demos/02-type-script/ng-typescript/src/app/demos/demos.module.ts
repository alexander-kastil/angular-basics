import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { ClassesComponent } from './samples/classes/classes.component';
import { FunctionsComponent } from './samples/functions/functions.component';
import { GenericsComponent } from './samples/generics/generics.component';
import { InterfacesComponent } from './samples/interfaces/interfaces.component';
import { ObjectsComponent } from './samples/objects/objects.component';
import { ServicesComponent } from './samples/services/services.component';
import { TypesComponent } from './samples/types/types.component';
import { UtilsComponent } from './samples/utils/utils.component';

const demoRoutes: Routes = [
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
      { path: 'gernerics', component: GenericsComponent },
      { path: 'services', component: ServicesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    TypesComponent,
    ClassesComponent,
    FunctionsComponent,
    GenericsComponent,
    InterfacesComponent,
    ObjectsComponent,
    ServicesComponent,
    UtilsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    MarkdownRendererModule
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule { }
