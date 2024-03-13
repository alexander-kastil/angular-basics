import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButton } from '@angular/material/button';
import { MatRadioGroup, MatRadioButton } from '@angular/material/radio';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { ColumnDirective } from 'src/app/shared/formatting/formatting-directives';
import { PersonService } from '../person.service';
import { Person, wealthOptsValues } from '../person.model';

@Component({
  selector: 'app-reactive-nested',
  templateUrl: './reactive-nested.component.html',
  styleUrls: ['./reactive-nested.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    ColumnDirective,
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatSelect,
    MatOption,
    MatRadioGroup,
    MatRadioButton,
    MatButton,
  ],
})
export class ReactiveNestedComponent {
  fb: FormBuilder = inject(FormBuilder);
  ps: PersonService = inject(PersonService);
  person: Person = new Person();
  wealthOpts = wealthOptsValues;
  personForm = this.fb.group({
    name: [this.person.name, Validators.required],
    age: [this.person.age],
    gender: [this.person.gender],
    email: [this.person.email],
    wealth: [this.person.wealth],
    address: this.fb.group({
      street: [this.person.address?.street],
      city: [this.person.address?.city],
      postalCode: [this.person.address?.postalCode],
    }),
  });

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      //Reminder: setValue vs patchValue
      this.personForm.patchValue(p);
      console.log('Data loaded from service', p);
    });

    setTimeout(() => {
      //Use this to update form incrementally
      this.personForm.patchValue({ name: 'Soi' });
      console.log('Cleo changed to Soi');
    }, 3000);
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
