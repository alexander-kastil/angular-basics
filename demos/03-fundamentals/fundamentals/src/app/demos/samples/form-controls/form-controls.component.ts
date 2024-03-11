import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { debounceTime } from 'rxjs';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class FormControlsComponent {
  destroy = inject(DestroyRef);

  userName = new FormControl<string | null>(
    '',
    [Validators.required, Validators.minLength(3)],
  );

  saveForLater = new FormControl<boolean>(true);
  showSave = true;

  ngOnInit() {
    this.userName.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroy),
        debounceTime(750) // wait 750ms after each keystroke
        //operator 2
        //operator 3
      )
      .subscribe((val) => {
        console.log('Currently your searching debounced for:', val);
      });

    this.userName.statusChanges
      .pipe(takeUntilDestroyed(this.destroy))
      .subscribe((status) => {
        if (status === 'INVALID') {
          this.showSave = false;
        }
        else {
          this.showSave = true;
        }
        console.log('status of search term:', status);
      });
  }
}
