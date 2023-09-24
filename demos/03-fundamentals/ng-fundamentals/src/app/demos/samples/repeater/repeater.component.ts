import { Component, OnInit } from '@angular/core';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';
import { MatButtonModule } from '@angular/material/button';
import { PersonEditComponent } from '../persons/person-edit/person-edit.component';
import { NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-repeater',
    templateUrl: './repeater.component.html',
    styleUrls: ['./repeater.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatToolbarModule,
        NgFor,
        PersonEditComponent,
        MatButtonModule,
    ],
})
export class RepeaterComponent implements OnInit {
  persons: Person[] = [];

  constructor(private ps: PersonService) {}

  ngOnInit() {
    this.ps.getPersons().subscribe((data) => {
      this.persons = data;
    });
  }

  savePersonToDB(p: Person) {
    console.log('saving to db:', p);
  }
}
