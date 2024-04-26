import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-take-until-destroyed',
  templateUrl: './take-until-destroyed.component.html',
  styleUrls: ['./take-until-destroyed.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class TakeUntilDestroyedComponent {
  // used for takeUntilDestroyed
  destroyRef = inject(DestroyRef);

  name = new FormControl('Giro the Spanish Greyhound', [Validators.required, Validators.minLength(3)], []);
  postal = new FormControl('3544', [Validators.minLength(4)]);
  city = new FormControl<string>('Idolsberg', [Validators.maxLength(15)]);

  subsCity: Subscription | null = null;

  ngOnInit() {
    // Traditional way of unsubscribing -> store the subscription in a variable
    this.subsCity = this.city.valueChanges.subscribe((data) =>
      console.log('Form values changed', data)
    );

    // Using takeUntilDestroyed to automatically unsubscribe
    this.name.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data) =>
      console.log('Form status changed', data)
    );
    this.postal.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.city.valueChanges.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((data) =>
      console.log('Form values changed', data)
    );
  }

  ngOnDestroy() {
    // Manually unsubscribe from the subscription
    if (this.subsCity) {
      this.subsCity.unsubscribe();
    }
  }
}
