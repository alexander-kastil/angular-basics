import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderDirective, BoxedDirective, CenteredDirective, ColumnDirective, FontBoldDirective, GapDirective, RowDirective, FullWidthDirective } from './formatting-directives';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ColumnDirective,
    RowDirective,
    BorderDirective,
    GapDirective,
    BoxedDirective,
    CenteredDirective,
    FontBoldDirective,
    FullWidthDirective,
  ],
})
export class FormattingModule { }
