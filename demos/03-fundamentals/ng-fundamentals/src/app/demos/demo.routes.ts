import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AttrBindingComponent } from './samples/attr-binding/attr-binding.component';
import { BindingComponent } from './samples/binding/binding.component';
import { ContainerComponent } from './samples/container/container.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { CustomDirectivesComponent } from './samples/custom-directives/custom-directives.component';
import { CustomPipesComponent } from './samples/custom-pipes/custom-pipes.component';
import { DependencyInjectionComponent } from './samples/dependency-injection/dependency-injection.component';
import { DirectivesComponent } from './samples/directives/directives.component';
import { ExpressionsComponent } from './samples/expressions/expressions.component';
import { FormControlsComponent } from './samples/form-controls/form-controls.component';
import { InlineComponent } from './samples/inline/inline.component';
import { LifecycleComponent } from './samples/lifecycle/lifecycle.component';
import { LocalizationComponent } from './samples/localization/localization.component';
import { NgTemplateComponent } from './samples/ng-template/ng-template.component';
import { PipesComponent } from './samples/pipes/pipes.component';
import { RepeaterComponent } from './samples/repeater/repeater.component';
import { ServicesBasicsComponent } from './samples/services-basics/services-basics.component';
import { StructDirectivesComponent } from './samples/struct-directives/struct-directives.component';
import { TemplateComponent } from './samples/template/template.component';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'services-basics', component: ServicesBasicsComponent },
      { path: 'attrbinding', component: AttrBindingComponent },
      { path: 'lifecycle', component: LifecycleComponent },
      { path: 'inline', component: InlineComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'structdirectives', component: StructDirectivesComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'repeater', component: RepeaterComponent },
      { path: 'container', component: ContainerComponent },
      { path: 'projection', component: ContentProjectionComponent },
      { path: 'customdirectives', component: CustomDirectivesComponent },
      { path: 'custompipes', component: CustomPipesComponent },
      { path: 'localization', component: LocalizationComponent },
      { path: 'expressions', component: ExpressionsComponent },
      { path: 'ng-template', component: NgTemplateComponent },
      { path: 'di', component: DependencyInjectionComponent },
      { path: 'form-controls', component: FormControlsComponent },
    ],
  },
];