import {
  Component,
  SimpleChanges,
  effect,
  input,
  output
} from '@angular/core';
import { Person } from '../../persons/person.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class PersonsListComponent {
  persons = input<Person[] | null>([]);
  personSelected = output<Person>();

  personsChanged = effect(() => {
    console.log('person changed:', this.persons());
  });

  selectPerson(p: Person) {
    this.personSelected.emit(p);
  }
}
