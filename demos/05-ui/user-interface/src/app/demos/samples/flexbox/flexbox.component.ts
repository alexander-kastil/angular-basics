import { Component, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss'],
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
