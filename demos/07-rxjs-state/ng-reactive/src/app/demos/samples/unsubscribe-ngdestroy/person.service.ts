import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get<Person[]>(`${environment.api}persons`);
  }
}
