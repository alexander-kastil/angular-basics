import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-mat-form-field',
    templateUrl: './mat-form-field.component.html',
    styleUrls: ['./mat-form-field.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
    ],
})
export class MatFormFieldComponent {
  hide = true;
}
