import { Component, OnInit } from '@angular/core';
import { PersonService } from '../persons/person.service';
import { Person } from '../persons/person.model';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-dependency-injection',
    templateUrl: './dependency-injection.component.html',
    styleUrls: ['./dependency-injection.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent]
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
