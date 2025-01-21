import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { PersonService } from '../persons/person.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent],
})
export class DependencyInjectionComponent {
  ps = inject(PersonService);
  persons = toSignal(this.ps.getPersons(), { initialValue: [] });
}
