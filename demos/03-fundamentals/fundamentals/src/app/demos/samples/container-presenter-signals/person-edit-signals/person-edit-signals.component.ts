import { Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Person } from '../../persons/person.model';

@Component({
  selector: 'app-person-edit-signals',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './person-edit-signals.component.html',
  styleUrl: './person-edit-signals.component.scss'
})
export class PersonEditSignalsComponent {
  person = input<Person>(new Person());
  editMode = input<boolean>(false);
  savePerson = output<Person>();

  // fcName = new FormControl(this.person()?.name ?? '');
  // fcAge = new FormControl(this.person()?.age ?? 0);
  // fcGender = new FormControl(this.person()?.gender ?? 'M');

  // @Input() person: Person = new Person();
  // @Input() editMode: boolean = false;
  // @Output() savePerson: EventEmitter<Person> = new EventEmitter<Person>();

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['person']) {
  //     console.log('receiving updated person:', changes['person'].currentValue);
  //   }
  // }

  doSave() {
    if (this.person() !== null) {
      const p = this.person() as Person;
      this.savePerson.emit(p);
    }
  }

  doDelete() {
    console.log(`deleting ${this.person()?.name}`);
  }
}