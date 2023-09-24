import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    NavbarComponent,
    SidePanelComponent,
    IntroComponent,
    LoadingComponent,
    MarkdownEditorComponent
  ],
  exports: [
    NavbarComponent,
    SidePanelComponent,
    IntroComponent,
    LoadingComponent,
    MarkdownEditorComponent
  ],
})
export class SharedModule { }
