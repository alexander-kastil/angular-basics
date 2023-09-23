import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    NgIf,
  ],
})
export class MaterialComponent {
  value = 50;
  validated = false;
  sliderForm: FormGroup;

  constructor() {
    this.sliderForm = new FormGroup({
      slider: new FormControl(this.value, Validators.min(1)),
    });

    this.sliderForm.valueChanges.subscribe(
      (data: any) => (this.value = data.slider)
    );
  }

  resetSlider() {
    this.sliderForm.controls['slider'].setValue(1);
  }
}
