import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {
  persons: Person[] = [];
  constructor(private ps: PersonService) { }

  ngOnInit(): void {
    this.ps.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }
}
