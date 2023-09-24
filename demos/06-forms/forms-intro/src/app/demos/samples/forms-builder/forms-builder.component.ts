import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Person, wealthOptsValues } from '../person.model';
import { PersonService } from '../person.service';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-forms-builder',
    templateUrl: './forms-builder.component.html',
    styleUrls: ['./forms-builder.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        FormsModule,
        ColumnDirective,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatRadioModule,
        NgFor,
        MatButtonModule,
    ],
})
export class FormsBuilderComponent implements OnInit {
  ps = inject(PersonService);
  fb = inject(FormBuilder);
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  //declarative approach
  personForm = this.fb.group({
    name: [this.person.name, Validators.required],
    age: [this.person.age],
    gender: [this.person.gender],
    email: [this.person.email],
    wealth: [this.person.wealth],
  });

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.patchValue(p);
      console.log('Data loaded from service', p);
    });

    setTimeout(() => {
      // Use this to update form incrementally
      this.personForm.patchValue({ name: 'Heinrich' });
      console.log('Heinz changed to Heinrich');
    }, 3000);
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
