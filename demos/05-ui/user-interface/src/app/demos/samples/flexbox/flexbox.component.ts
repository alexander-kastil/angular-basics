import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { FormattingModule } from 'src/app/shared/formatting/formatting.module';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatButtonModule,
    FormattingModule,
  ],
})
export class FlexboxComponent {
  currentClass = 'flex-container-col';
  movies = this.generateMovies();

  generateMovies(itemCount: number = 8): Movie[] {
    this.movies = [];
    for (let i = 0; i < itemCount; i++) {
      this.movies.push({ title: `Movie ${i}` } as Movie);
    }
    return this.movies;
  }

  toggleLayout() {
    this.currentClass =
      this.currentClass == 'flex-container-row'
        ? 'flex-container-col'
        : 'flex-container-row';
    console.log(this.currentClass);
  }
}
