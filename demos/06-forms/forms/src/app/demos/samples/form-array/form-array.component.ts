import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MarkdownRendererComponent
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
    const skillsGrp = this.skillForm.controls['skillsGrp'] as FormArray;
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
