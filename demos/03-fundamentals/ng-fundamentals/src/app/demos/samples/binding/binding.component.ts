import { JsonPipe } from '@angular/common';
import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { delay, of } from 'rxjs';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';
import { MarkdownRendererComponent } from '../../../shared/markdown/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    JsonPipe
  ],
})
export class BindingComponent implements OnInit {
  ps = inject(PersonService);
  persons = signal<Person[]>([]);
  selectedId = signal<number>(0);
  selectedPerson: Person = new Person();

  hide = signal<boolean>(false);
  latePerson: Person | null = null;
  isActive = signal<boolean>(true);

  constructor() {
    effect(() => {
      this.selectedPerson = this.persons().find(p => p.id === this.selectedId()) || new Person();
    });
  }

  ngOnInit() {
    this.ps.getPersons()
      .subscribe((data) => {
        if (data?.length > 0) {
          this.persons.set(data);
          this.selectedId.set(data[0].id);
        }
      });

    //convert person to observable using of rxjs operator
    const p: Person = { id: 17, name: 'Heidi', age: 13, gender: 'female' };
    of(p)
      .pipe(
        delay(4000)
      )
      .subscribe((data) => {
        this.latePerson = data;
      });
  }

  toggleDisplay() {
    this.hide.set(!this.hide());
  }

  handleChange(p: Person) {
    console.log('value received from event binding', p);
  }
}
