import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenteredDirective, ColumnDirective } from './formatting-directives';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ColumnDirective,
    CenteredDirective
  ],
  exports: [
    ColumnDirective,
    CenteredDirective
  ]
})
export class FormattingModule { }
