import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesResponse } from './RatesResponse';
import { environment } from 'src/environments/environment';

// For current currency data use https://fixer.io
// Register your own key and use:
// url = `http://data.fixer.io/api/latest?access_key=${environment.fixerAPIKey}`;

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  http = inject(HttpClient);
  url = environment.fixerApi;
  rates: Map<string, number> = new Map<string, number>();

  getRates(): Observable<RatesResponse> {
    return this.http.get<RatesResponse>(this.url);
  }
}
