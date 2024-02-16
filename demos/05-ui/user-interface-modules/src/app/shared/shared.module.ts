import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  PageNotFoundComponent,
  MarkdownEditorComponent,
  LoadingComponent,
  IntroComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule { }
