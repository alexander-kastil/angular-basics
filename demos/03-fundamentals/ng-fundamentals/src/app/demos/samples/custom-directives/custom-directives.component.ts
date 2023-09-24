import { Component } from '@angular/core';
import { BorderDirective, CenteredDirective } from './formatting-directives';
import { EditableDirective } from './editable.directive';
import { EuroDirective } from './euro.directive';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-custom-directives',
    templateUrl: './custom-directives.component.html',
    styleUrls: ['./custom-directives.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCardModule, FormsModule, EuroDirective, EditableDirective, BorderDirective, CenteredDirective]
})
export class CustomDirectivesComponent {
  price: number = 0;
}
