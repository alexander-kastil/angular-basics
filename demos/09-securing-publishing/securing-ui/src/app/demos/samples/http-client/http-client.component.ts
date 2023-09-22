import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent {
  http = inject(HttpClient);
  result: any;
  fname = '';
  token = 'mock-token';
  key = 'mock-key';

  observeResponse() {
    this.http.get(`${environment.api}skills`, {
      observe: 'response',
    })
      .subscribe((response: HttpResponse<any>) => {
        this.result = response;
        console.log('Response using {observe: "response"}: ', response);
        console.log('Response body: ', response.body);
      });
  }

  usingHeadersHttpClient() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'subscription-key': this.key
    });

    this.http
      .get(`${environment.api}skills`, { headers: header })
      .subscribe((data) => {
        console.log('Response using headers variable: ', data);
        this.result = data;
      });
  }
}
