import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { BindingComponent } from './samples/binding/binding.component';
import { ContainerComponent } from './samples/container/container.component';
import { ContentProjectionComponent } from './samples/content-projection/content-projection.component';
import { SplitPopupComponent } from './samples/content-projection/split-popup/split-popup.component';
import { uxButtonComponent } from './samples/content-projection/ux-button/ux-button.component';
import { uxSplitComponent } from './samples/content-projection/ux-split/ux-split.component';
import { CustomDirectivesComponent } from './samples/custom-directives/custom-directives.component';
import { EuroDirective } from './samples/custom-directives/euro.directive';
import { CheckPipe } from './samples/custom-pipes/check.pipe';
import { CustomPipesComponent } from './samples/custom-pipes/custom-pipes.component';
import { DirectivesComponent } from './samples/directives/directives.component';
import { ExpressionsComponent } from './samples/expressions/expressions.component';
import { InlineComponent } from './samples/inline/inline.component';
import { LifecycleComponent } from './samples/lifecycle/lifecycle.component';
import { LocalizationComponent } from './samples/localization/localization.component';
import { NgTemplateComponent } from './samples/ng-template/ng-template.component';
import { PersonEditComponent } from './samples/persons/person-edit/person-edit.component';
import { PersonsListComponent } from './samples/persons/persons-list/persons-list.component';
import { PipesComponent } from './samples/pipes/pipes.component';
import { RepeaterComponent } from './samples/repeater/repeater.component';
import { StructDirectivesComponent } from './samples/struct-directives/struct-directives.component';
import { TemplateComponent } from './samples/template/template.component';
import { AttrBindingComponent } from './samples/attr-binding/attr-binding.component';
import { DependencyInjectionComponent } from './samples/dependency-injection/dependency-injection.component';
import { EuroPipe } from './samples/custom-pipes/euro.pipe';
import { EditableDirective } from './samples/custom-directives/editable.directive';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';
import { FormControlsComponent } from './samples/form-controls/form-controls.component';
import { BorderDirective, CenteredDirective } from './samples/custom-directives/formatting-directives';
import { ServicesBasicsComponent } from './samples/services-basics/services-basics.component';

const demoRoutes: Routes = [
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

@NgModule({
  declarations: [
    DemoContainerComponent,
    CustomPipesComponent,
    InlineComponent,
    TemplateComponent,
    PipesComponent,
    DirectivesComponent,
    StructDirectivesComponent,
    BindingComponent,
    RepeaterComponent,
    ContainerComponent,
    ContentProjectionComponent,
    CustomDirectivesComponent,
    LocalizationComponent,
    ExpressionsComponent,
    EuroPipe,
    EuroDirective,
    CheckPipe,
    PersonEditComponent,
    PersonsListComponent,
    uxButtonComponent,
    uxSplitComponent,
    SplitPopupComponent,
    LifecycleComponent,
    NgTemplateComponent,
    AttrBindingComponent,
    DependencyInjectionComponent,
    EditableDirective,
    FormControlsComponent,
    ServicesBasicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    MarkdownRendererModule,
    CenteredDirective,
    BorderDirective
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class DemosModule { }
