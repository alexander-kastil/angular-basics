import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { BorderDirective, CenteredDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-loading-host',
  templateUrl: './loading-host.component.html',
  styleUrls: ['./loading-host.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    BorderDirective,
    CenteredDirective,
  ],
})
export class LoadingHostComponent {
  client = inject(HttpClient);

  doLoad() {
    this.client.get(`${environment.api}vouchers`).subscribe((data) => console.log(data));
  }
}
