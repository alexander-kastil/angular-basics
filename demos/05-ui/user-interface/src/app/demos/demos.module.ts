import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { BoostrapComponent } from './samples/boostrap/boostrap.component';
import { CalculatorComponent } from './samples/material-dialog/calculator/calculator.component';
import { ChartComponent } from './samples/chart/chart.component';
import { ClassicDialogComponent } from './samples/classic-dialog/classic-dialog.component';
import { DialogComponent } from './samples/classic-dialog/dialog/dialog.component';
import { CSSBindingComponent } from './samples/cssbinding/binding.component';
import { CssgridComponent } from './samples/cssgrid/cssgrid.component';
import { DragDropComponent } from './samples/drag-drop/drag-drop.component';
import { FlexMediaQueryComponent } from './samples/flex-media-query/flex-media-query.component';
import { FlexboxComponent } from './samples/flexbox/flexbox.component';
import { GoogleFontsComponent } from './samples/google-fonts/google-fonts.component';
import { InlineCssComponent } from './samples/inline-css/inline-css.component';
import { MarkdownThirdPartyComponent } from './samples/markdown-third-party/markdown-third-party.component';
import { MaterialDialogComponent } from './samples/material-dialog/material-dialog.component';
import { MaterialShowCaseComponent } from './samples/material-showcase/material-showcase.component';
import { StepperComponent } from './samples/material-stepper/stepper.component';
import { MaterialTableComponent } from './samples/material-table/material-table.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';
import { MatFormFieldComponent } from './samples/mat-form-field/mat-form-field.component';
import { CenteredDirective, RowDirective } from '../shared/formatting/formatting-directives';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'inline-css', component: InlineCssComponent },
      { path: 'mat-form-field', component: MatFormFieldComponent },
      { path: 'cssbasics', component: CSSBindingComponent },
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
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    CSSBindingComponent,
    CssgridComponent,
    MaterialShowCaseComponent,
    MaterialTableComponent,
    MaterialDialogComponent,
    GoogleFontsComponent,
    FlexboxComponent,
    FlexMediaQueryComponent,
    DragDropComponent,
    VirtualScrollComponent,
    StepperComponent,
    CalculatorComponent,
    ClassicDialogComponent,
    DialogComponent,
    InlineCssComponent,
    BoostrapComponent,
    ChartComponent,
    MarkdownThirdPartyComponent,
    MatFormFieldComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    DragDropModule,
    ScrollingModule,
    NgxChartsModule,
    SharedModule,
    HttpClientModule,
    CenteredDirective,
    RowDirective,
    MarkdownRendererModule
  ],
  providers: [DemoService],
})
export class DemosModule { }
