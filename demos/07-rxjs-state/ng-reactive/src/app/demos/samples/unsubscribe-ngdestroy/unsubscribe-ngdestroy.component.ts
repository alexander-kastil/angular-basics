import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Person } from './person.model';
import { PersonService } from './person.service';

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
    this.personSubscription = this.service.getPersons().subscribe((persons) => {
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
