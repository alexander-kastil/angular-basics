import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { MarkdownRendererModule } from './markdown-renderer/markdown-renderer.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  MarkdownEditorComponent,
  IntroComponent,
  LoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule { }
