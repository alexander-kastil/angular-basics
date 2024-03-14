import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BorderDirective } from '../../../shared/formatting/formatting-directives';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, BorderDirective, AsyncPipe]
})
export class FormControlsComponent {
  searchTerm = new FormControl<string>('');
  output = this.searchTerm.valueChanges.pipe(
    tap((val) => console.log('searching...' + val)),
    debounceTime(750)
  )
}
