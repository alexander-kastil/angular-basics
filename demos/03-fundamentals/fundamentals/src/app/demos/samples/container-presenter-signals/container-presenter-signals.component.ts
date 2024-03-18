import { Component, inject, signal } from '@angular/core';
import { PersonListSignalsComponent } from './person-list-signals/person-list-signals.component';
import { PersonEditSignalsComponent } from './person-edit-signals/person-edit-signals.component';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-container-presenter-signals',
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    PersonListSignalsComponent,
    PersonEditSignalsComponent
  ],
  templateUrl: './container-presenter-signals.component.html',
  styleUrl: './container-presenter-signals.component.scss'
})
export class ContainerPresenterSignalsComponent {
  ps = inject(PersonService);

  persons = toSignal(this.ps.getPersons(), { initialValue: [] });
  current = signal<Person | null>(null);

  onPersonSelected(p: Person) {
    this.current.set(p);
    // this.current = p;
    // this.current = { ...p };
    // this.current = Object.assign({},p)
  }

  onPersonSaved(p: Person) {
    // console.log('mock saving to service:', p);
    // const existing: Person | undefined = this.persons().find((i) => i.id == p.id);
    // if (existing) {
    //   Object.assign(existing, p);
    // } else {
    //   this.persons.push(p);
    // }
    // this.current.set(null);
    // console.log('Persons array after save', this.persons);
  }

}
