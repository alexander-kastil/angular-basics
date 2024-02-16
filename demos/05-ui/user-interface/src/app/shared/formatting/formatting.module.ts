import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderDirective, BoxedDirective, CenteredDirective, ColumnDirective, FontBoldDirective, GapDirective, RowDirective, FullWidthDirective } from './formatting-directives';

const components = [
  ColumnDirective,
  RowDirective,
  BorderDirective,
  GapDirective,
  BoxedDirective,
  CenteredDirective,
  FontBoldDirective,
  FullWidthDirective,
];

@NgModule({
  declarations: [],
  imports: [components],
  exports: [components]
})
export class FormattingModule { }
