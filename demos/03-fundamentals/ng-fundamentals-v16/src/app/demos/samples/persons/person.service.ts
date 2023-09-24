import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  http = inject(HttpClient);

  getPersons() {
    return this.http.get<Person[]>(`${environment.api}persons`);
  }
}
