import { Component } from '@angular/core';
import { JsonPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-pipes',
    templateUrl: './pipes.component.html',
    styleUrls: ['./pipes.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        JsonPipe,
        CurrencyPipe,
        DatePipe,
    ],
})
export class PipesComponent {
  person = {
    id: 1,
    name: 'Soi',
    age: 6,
    imgUrl: '',
    salary: 2000,
    dateOfBirth: new Date(2010, 13, 2, 15, 0),
  };

  persons = [
    { name: 'Heinz', gender: 'male' },
    { name: 'Brunhilde', gender: 'female' },
    { name: 'Susi', gender: 'female' },
  ];
}
