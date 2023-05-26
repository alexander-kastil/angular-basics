import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from '../reified-reactive/person.model';
import { PersonService } from '../reified-reactive/person.service';

@Component({
  selector: 'app-unsubscribe-ngdestroy',
  templateUrl: './unsubscribe-ngdestroy.component.html',
  styleUrls: ['./unsubscribe-ngdestroy.component.scss']
})
export class UnsubscribeNgdestroyComponent {
  service = inject(PersonService);
  filter$ = new FormControl('', { nonNullable: true });
  personSubscription: Subscription | null = null;
  filterSubscription: Subscription | null = null;

  persons: Person[] = [];
  view: Person[] = [];


  ngOnInit(): void {
    // no unsubscribe needed because observable from service is finite
    // just to demonstrate the fact that the more streams you have the more you need to manage them
    this.personSubscription = this.service
      .getPersons()
      //takeUntil will unsubscribe from the stream when the destroy$ Subject emits a value
      .subscribe((persons) => {
        this.persons = persons;
        this.view = persons;
      });

    this.filterSubscription = this.filter$.valueChanges
      .subscribe((val) => {
        this.view =
          val == ''
            ? this.persons
            : this.persons.filter((skill) => skill.name.toLowerCase().includes(val.toLocaleLowerCase()));
      });
  }

  ngOnDestroy() {
    this.personSubscription?.unsubscribe();
    this.filterSubscription?.unsubscribe();
  }
}
