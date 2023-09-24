import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-template-validation',
    templateUrl: './template-validation.component.html',
    styleUrls: ['./template-validation.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        FormsModule,
        ColumnDirective,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatSelectModule,
        MatOptionModule,
        MatButtonModule,
    ],
})
export class TemplateValidationComponent implements OnInit {
  @ViewChild('personForm') form: NgForm | null = null;
  ps = inject(PersonService);
  person: Person = new Person();

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  patchValue() {
    this.form?.controls['name'].setValue('Heinrich');
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
