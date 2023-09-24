import { Component, OnInit, inject } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-ng-model-grp',
    templateUrl: './ng-model-grp.component.html',
    styleUrls: ['./ng-model-grp.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        FormsModule,
        ColumnDirective,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatRadioModule,
        NgFor,
        NgIf,
        MatButtonModule,
    ],
})
export class NgModelGrpComponent implements OnInit {
  ps = inject(PersonService);
  person: Person = new Person();
  wealthOpts = ['poor', 'rich', 'middle_class'];

  ngOnInit() {
    this.ps.getPerson().subscribe((p) => {
      this.person = p;
    });
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }
}
