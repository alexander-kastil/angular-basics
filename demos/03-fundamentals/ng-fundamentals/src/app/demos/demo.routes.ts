import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AttrBindingComponent } from './samples/attr-binding/attr-binding.component';
import { BindingComponent } from './samples/binding/binding.component';
import { ContainerComponent } from './samples/container-presenter/container.component';
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
import { PipesComponent } from './samples/pipes/pipes.component';
import { ServicesBasicsComponent } from './samples/services-basics/services-basics.component';
import { StructDirectivesComponent } from './samples/struct-directives/struct-directives.component';
import { TemplateComponent } from './samples/template/template.component';
import { ControlFlowComponent } from './samples/control-flow/control-flow.component';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'services-basics', component: ServicesBasicsComponent },
      { path: 'attribute-binding', component: AttrBindingComponent },
      { path: 'lifecycle', component: LifecycleComponent },
      { path: 'inline', component: InlineComponent },
      { path: 'control-flow', component: ControlFlowComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'directives', component: DirectivesComponent },
      { path: 'structural-directives', component: StructDirectivesComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'container', component: ContainerComponent },
      { path: 'projection', component: ContentProjectionComponent },
      { path: 'custom-directives', component: CustomDirectivesComponent },
      { path: 'custom-pipes', component: CustomPipesComponent },
      { path: 'localization', component: LocalizationComponent },
      { path: 'expressions', component: ExpressionsComponent },
      { path: 'di', component: DependencyInjectionComponent },
      { path: 'form-controls', component: FormControlsComponent },
    ],
  },
];