import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent {
  destroy = inject(DestroyRef);
  searchTerm = new FormControl<string | null>('', [Validators.required, Validators.minLength(3)]);
  chkSave = new FormControl<boolean>(true);

  ngOnInit() {
    this.searchTerm.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroy),
        debounceTime(750) // wait 750ms after each keystroke
        //operator 2
        //operator 3
      )
      .subscribe((val) => {
        console.log('Currently your searching debounced for:', val);
      });

    this.searchTerm.statusChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((status) => {
        console.log('status of search term:', status);
      });
  }
}
