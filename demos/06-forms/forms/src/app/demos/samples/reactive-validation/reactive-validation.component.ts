import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, UntypedFormControl, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { asyncMailExistsValidator } from './asyncMailExistsValidator';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss'],
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
    MatButtonModule,
    MarkdownRendererComponent
  ],
})
export class ReactiveValidationComponent implements OnInit {
  ps = inject(PersonService);
  fb = inject(FormBuilder);
  mailExistsValidator = inject(asyncMailExistsValidator);
  person: Person = new Person();
  wealthOpts = ['poor', 'rich', 'middle_class'];

  personForm = this.fb.group({
    name: [
      this.person.name,
      [Validators.required, Validators.minLength(4), this.validateName],
    ],
    age: [this.person.age, [Validators.min(18), Validators.max(99)]],
    gender: [this.person.gender],
    email: [this.person.email,
    {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.mailExistsValidator],
      updateOn: 'blur'
    }
    ],
    wealth: [this.person.wealth],
  });


  ngOnInit() {
    this.loadData();
    this.subscribeChanges();
  }

  private loadData() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.patchValue(p);
    });
  }

  private subscribeChanges() {
    this.personForm.valueChanges.subscribe((vals) => {
      console.log('changes happening @form: ', vals);
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }

  //Sample for custom sync validator
  validateName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Hugo') {
      return { nameError: true };
    }
    return null;
  }

  violatesMinLenght() {
    let result = false;
    let errs: any = this.personForm.controls['name'].errors;

    if (errs != null) {
      console.log('Errors in Name field: ', errs);
      if (errs['minlength']) {
        result = true;
      }
    }
    return result;
  }

  validateForm(form: FormGroup) {
    // validated single control
    form.controls['name'].updateValueAndValidity();
    // validated form
    form.updateValueAndValidity();
    console.log('form is valid:', form.valid);
  }
}
