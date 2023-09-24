import { Component, inject } from '@angular/core';
import { FormBuilder, UntypedFormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        NgFor,
        MatButtonModule,
    ],
})
export class FormArrayComponent {
  fb: FormBuilder = inject(FormBuilder);
  skillForm = this.fb.group({
    name: 'Giro',
    skillsGrp: this.fb.array([
      this.fb.group({ skillname: 'Hunting', years: 9 }),
    ]),
  });

  addSkill() {
    const skillsGrp = this.skillForm.controls['skillsGrp'] as UntypedFormArray;
    skillsGrp.push(
      this.fb.group({
        skillname: '',
        years: '',
      })
    );
  }

  saveForm() {
    console.log('saving ...', this.skillForm.value);
  }
}
