import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  http = inject(HttpClient);

  getPerson(): Observable<Person> {
    return of({
      id: 1,
      name: 'Heinz',
      gender: 'male',
      age: 20,
      email: 'derschoeneheinz@xyz.at',
      wealth: 'poor',
      address: {
        street: 'Seestraße 44',
        city: 'Idolsberg',
        postalCode: '3544',
      },
    }).pipe(delay(1500));
  }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(environment.api + 'persons');
  }

  save(form: NgForm) {
    console.log('ngForm:', form);
    console.log('ngForm.value:', form.value as Person);
  }

  checkMailExists(email: string): Observable<boolean> {
    // Mocking Http Call to service to check weather user exists
    let exists = email == 'alexander.kastil@integrations.at';
    return of(exists).pipe(delay(2500));
  }
}
