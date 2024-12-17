import { Component, OnInit } from '@angular/core';
import { DecimalPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
  ],
})
export class LocalizationComponent implements OnInit {
  person = {
    id: 1,
    name: 'Alex',
    age: 47,
    imgUrl: '',
    salary: 2000,
    dateOfBirth: new Date(1970, 3, 2, 15, 0),
  }; // 2.4.70

  val = '{provide: LOCALE_ID, useValue: "de"}';

  constructor() { }

  ngOnInit() { }
}
