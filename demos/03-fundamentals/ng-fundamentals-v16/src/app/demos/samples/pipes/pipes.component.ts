import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  person = {
    id: 1,
    name: 'Soi',
    age: 6,
    imgUrl: '',
    salary: 2000,
    dateOfBirth: new Date(2010, 13, 2, 15, 0),
  };

  persons = [
    { name: 'Heinz', gender: 'male' },
    { name: 'Brunhilde', gender: 'female' },
    { name: 'Susi', gender: 'female' },
  ];
}
