import { Component, OnInit, inject } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';
import { PersonEditComponent } from '../persons/person-edit/person-edit.component';
import { NgIf } from '@angular/common';
import { PersonsListComponent } from '../persons/persons-list/persons-list.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        PersonsListComponent,
        NgIf,
        PersonEditComponent,
    ],
})
export class ContainerComponent implements OnInit {
  ps = inject(PersonService);
  persons: Person[] = [];
  current: Person | null = null;

  ngOnInit() {
    this.ps.getPersons().subscribe((data) => {
      this.persons = data;
    });
  }

  onPersonSelected(p: Person) {
    // this.current = p;
    this.current = { ...p };
    // this.current = Object.assign({},p)
  }

  onPersonSaved(p: Person) {
    console.log('mock saving to service:', p);
    const existing: Person | undefined = this.persons.find((i) => i.id == p.id);
    if (existing) {
      Object.assign(existing, p);
    } else {
      this.persons.push(p);
    }
    console.log('Persons array after save', this.persons);
  }
}
