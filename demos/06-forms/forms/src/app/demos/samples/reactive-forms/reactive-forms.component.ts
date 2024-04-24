import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { Person, wealthOptsValues } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
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
export class ReactiveFormsComponent implements OnInit {
  ps = inject(PersonService);
  person: Person = new Person();
  wealthOpts = wealthOptsValues;

  //declarative approach to form creation -> produces typed from
  personForm = new FormGroup({
    name: new FormControl(this.person.name, [Validators.required], []),
    age: new FormControl(this.person.age),
    email: new FormControl(this.person.email),
    gender: new FormControl(this.person.gender),
    wealth: new FormControl(this.person.wealth),
  });

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      // Could be setValue if model is implemented with all props in form
      // Otherwise use patchValue      
      this.personForm.patchValue(p);
      // this.personForm.setValue(p);
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
