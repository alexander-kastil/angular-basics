import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-flexbox',
    templateUrl: './flexbox.component.html',
    styleUrls: ['./flexbox.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
        NgFor,
    ],
})
export class FlexboxComponent implements OnInit {
  movies: Movie[] = [];
  currentClass = 'flex-container-col';

  ngOnInit() {
    this.movies = this.getMovies();
  }

  getMovies(itemCount: number = 8): Movie[] {
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
