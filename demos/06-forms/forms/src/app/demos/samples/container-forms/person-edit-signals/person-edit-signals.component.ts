import { Component, effect, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './person-edit-signals.component.html',
  styleUrl: './person-edit-signals.component.scss'
})
export class PersonEditSignalsComponent {
  person = input<Person | null>(new Person());
  onSavePerson = output<Person>();

  fcName = new FormControl(this.person()?.name ?? '');
  fcAge = new FormControl(this.person()?.age ?? 0);
  fcGender = new FormControl(this.person()?.gender ?? 'M');

  constructor() {
    effect(() => {
      if (this.person() !== null) {
        var p = this.person() as Person;
        this.fcName.setValue(p.name);
        this.fcAge.setValue(p.age);
        this.fcGender.setValue(p.gender);
      }
    });
  }

  savePerson() {
    if (this.person() !== null) {
      const p = this.person() as Person;
      this.onSavePerson.emit(p);
    }
  }

  deletePerson() {
    console.log(`deleting ${this.person()?.name}`);
  }
}