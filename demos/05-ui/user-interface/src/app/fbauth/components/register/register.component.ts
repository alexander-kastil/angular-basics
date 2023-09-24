import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';
import { AbstractControl, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatButtonModule,
        MatDialogModule,
    ],
})
export class RegisterComponent {
  as = inject(FirebaseAuthService);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        passwordRepeat: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordsMatch }
    ),
  });

  registerUser(form: FormGroup) {
    this.as.createUser(form.value.email, form.value.passwords.password);
  }

  passwordsMatch(c: AbstractControl): { invalid: boolean } | null {
    if (c.get('password')?.value !== c.get('passwordRepeat')?.value) {
      return { invalid: true };
    }
    return null;
  }
}
