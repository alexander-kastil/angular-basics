import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';
import { delay } from 'rxjs/operators';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgFor } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ng-template',
    templateUrl: './ng-template.component.html',
    styleUrls: ['./ng-template.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatProgressBarModule,
        NgIf,
        MatCardModule,
        MatListModule,
        NgFor,
    ],
})
export class NgTemplateComponent implements OnInit {
  constructor(private ps: PersonService) {}

  persons: Person[] = [];

  ngOnInit(): void {
    this.ps
      .getPersons()
      .pipe(delay(2500))
      .subscribe((data) => {
        this.persons = data;
      });
  }
}
