import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { FormArrayComponent } from './samples/form-array/form-array.component';
import { FormControlComponent } from './samples/form-control/form-control.component';
import { FormsBuilderComponent } from './samples/forms-builder/forms-builder.component';
import { NgModelGrpComponent } from './samples/ng-model-grp/ng-model-grp.component';
import { ReactiveFormsComponent } from './samples/reactive-forms/reactive-forms.component';
import { ReactiveValidationComponent } from './samples/reactive-validation/reactive-validation.component';
import { TemplateDrivenComponent } from './samples/template-driven/template-driven.component';
import { TemplateValidationComponent } from './samples/template-validation/template-validation.component';
import { ReactiveNestedComponent } from './samples/reactive-nested/reactive-nested.component';
import { ContainerPresenterSignalsComponent } from './samples/container-forms/container-presenter-signals.component';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'template-driven', component: TemplateDrivenComponent },
      { path: 'model-grp', component: NgModelGrpComponent },
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      { path: 'forms-builder', component: FormsBuilderComponent },
      { path: 'template-validation', component: TemplateValidationComponent },
      { path: 'reactive-validation', component: ReactiveValidationComponent },
      { path: 'form-control', component: FormControlComponent },
      { path: 'form-array', component: FormArrayComponent },
      { path: 'reactive-nested', component: ReactiveNestedComponent },
      { path: 'container-forms', component: ContainerPresenterSignalsComponent }
    ],
  },
];
