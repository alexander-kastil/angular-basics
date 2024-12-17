import {
  Component,
  effect,
  input,
  output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Person } from '../../persons/person.model';

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
export class PersonEditComponent {
  person = input.required<Person>();
  editMode = input<boolean>(false);
  savePerson = output<Person>();

  personChanged = effect(() => {
    console.log('person changed:', this.person);
  });

  doSave() {
    this.savePerson.emit(this.person());
  }

  doDelete() {
    console.log(`deleting ${this.person.name}`);
  }
}
