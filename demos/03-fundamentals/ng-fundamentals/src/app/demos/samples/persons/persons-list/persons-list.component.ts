import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { Person } from '../person.model';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-persons-list',
    templateUrl: './persons-list.component.html',
    styleUrls: ['./persons-list.component.scss'],
    standalone: true,
    imports: [MatCardModule, NgFor],
})
export class PersonsListComponent {
  @Input() persons: Person[] | null = [];
  @Output() personSelected = new EventEmitter<Person>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['persons']) {
      console.log('receiving new persons:', changes['persons'].currentValue);
    }
  }

  selectPerson(p: Person) {
    this.personSelected.emit(p);
  }
}
