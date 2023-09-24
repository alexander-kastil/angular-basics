import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnChanges {
  @Input() person: Person = new Person();
  @Input() editMode: boolean = false;
  @Output() savePerson: EventEmitter<Person> = new EventEmitter<Person>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['person']) {
      console.log('receiving updated person:', changes['person'].currentValue);
    }
  }

  doSave() {
    this.savePerson.emit(this.person);
  }

  doDelete() {
    console.log(`deleting ${this.person.name}`);
  }
}
