import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Person } from '../../persons/person.model';

@Component({
  selector: 'app-person-list-signals',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './person-list-signals.component.html',
  styleUrl: './person-list-signals.component.scss'
})
export class PersonListSignalsComponent {
  persons = input.required<Person[]>();
  personSelected = output<Person>();

  selectPerson(p: Person) {
    this.personSelected.emit(p);
  }
}