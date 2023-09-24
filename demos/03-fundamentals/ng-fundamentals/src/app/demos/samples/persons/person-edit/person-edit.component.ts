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
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-person-edit',
    templateUrl: './person-edit.component.html',
    styleUrls: ['./person-edit.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatRadioModule,
        MatButtonModule,
    ],
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
