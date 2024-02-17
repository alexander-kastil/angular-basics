import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-loading-host',
  templateUrl: './loading-host.component.html',
  styleUrls: ['./loading-host.component.scss'],
})
export class LoadingHostComponent {
  client = inject(HttpClient);

  doLoad() {
    this.client.get(`${environment.api}vouchers`).subscribe((data) => console.log(data));
  }
}
