import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
],
})
export class PageNotFoundComponent { }
