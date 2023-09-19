import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { Person } from '../persons/person.model';
import { PersonService } from '../persons/person.service';
import { delay, of, take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  ps = inject(PersonService);
  hide = false;
  persons: Person[] = [];
  selectedPerson: Person = new Person();
  latePerson: Person | null = null;
  isActive: boolean = false;

  ngOnInit() {
    this.ps.getPersons()
      .subscribe((data) => {
        if (data?.length > 0) {
          this.persons = data;
          this.selectedPerson = this.persons[0];
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
    this.hide = !this.hide;
  }

  handleChange(p: Person) {
    console.log('value received from event binding', p);
  }
}
