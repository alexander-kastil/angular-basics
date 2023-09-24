import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { BoostrapComponent } from './samples/boostrap/boostrap.component';
import { ChartComponent } from './samples/chart/chart.component';
import { ClassicDialogComponent } from './samples/classic-dialog/classic-dialog.component';
import { CSSBindingComponent } from './samples/cssbinding/binding.component';
import { CssgridComponent } from './samples/cssgrid/cssgrid.component';
import { DragDropComponent } from './samples/drag-drop/drag-drop.component';
import { FlexMediaQueryComponent } from './samples/flex-media-query/flex-media-query.component';
import { FlexboxComponent } from './samples/flexbox/flexbox.component';
import { GoogleFontsComponent } from './samples/google-fonts/google-fonts.component';
import { InlineCssComponent } from './samples/inline-css/inline-css.component';
import { MarkdownThirdPartyComponent } from './samples/markdown-third-party/markdown-third-party.component';
import { MatFormFieldComponent } from './samples/mat-form-field/mat-form-field.component';
import { MaterialDialogComponent } from './samples/material-dialog/material-dialog.component';
import { MaterialShowCaseComponent } from './samples/material-showcase/material-showcase.component';
import { StepperComponent } from './samples/material-stepper/stepper.component';
import { MaterialTableComponent } from './samples/material-table/material-table.component';
import { MaterialThemeComponent } from './samples/material-theme/material-theme.component';
import { StyleInheritanceComponent } from './samples/style-inheritance/style-inheritance.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';

export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    children: [
      { path: 'style-inheritence', component: StyleInheritanceComponent },
      { path: 'inline-css', component: InlineCssComponent },
      { path: 'mat-form-field', component: MatFormFieldComponent },
      { path: 'css-binding', component: CSSBindingComponent },
      { path: 'bootstrap', component: BoostrapComponent },
      { path: 'cssgrid', component: CssgridComponent },
      { path: 'material', component: MaterialShowCaseComponent },
      { path: 'material-table', component: MaterialTableComponent },
      { path: 'classic-dialog', component: ClassicDialogComponent },
      { path: 'material-dialog', component: MaterialDialogComponent },
      { path: 'stepper', component: StepperComponent },
      { path: 'fonts', component: GoogleFontsComponent },
      { path: 'flexbox', component: FlexboxComponent },
      { path: 'flexmediaq', component: FlexMediaQueryComponent },
      { path: 'dragdrop', component: DragDropComponent },
      { path: 'virtualscroll', component: VirtualScrollComponent },
      { path: 'chart', component: ChartComponent },
      { path: 'markdown', component: MarkdownThirdPartyComponent },
      { path: 'bootstrap', component: BoostrapComponent },
      { path: 'material-theme', component: MaterialThemeComponent },
    ],
  },
];
