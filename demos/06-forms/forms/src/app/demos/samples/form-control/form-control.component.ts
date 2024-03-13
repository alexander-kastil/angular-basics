import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MarkdownRendererComponent
  ],
})
export class FormControlComponent implements OnInit {
  dog = { name: 'Giro', postal: '3544', city: 'Idolsberg' }
  name = new FormControl(this.dog.name, [
    Validators.required,
    Validators.minLength(3),
  ]);
  postal = new FormControl(this.dog.postal, [Validators.minLength(4)]);
  city = new FormControl<string>(this.dog.city, [Validators.maxLength(15)]);

  ngOnInit() {
    this.name.valueChanges.subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.subscribe((data) =>
      console.log('Form status changed', data)
    );
  }

  updateName() {
    this.name.setValue('Soi');
  }

  resetName() {
    this.name.reset('Giro');
  }

  getValue() {
    console.log(this.name.value);
  }
}
