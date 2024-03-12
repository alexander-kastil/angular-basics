import { NgModule } from '@angular/core';
import { BorderDirective, BoxedDirective, CenteredDirective, ColumnDirective, FontBoldDirective, FullWidthDirective, GapDirective, RowDirective } from './formatting-directives';

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
