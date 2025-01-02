import { Component, inject } from '@angular/core';
import { StatefulSignalsService } from './stateful-signals.service';
import { BoxedDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-stateful-signals',
  standalone: true,
  imports: [MarkdownRendererComponent, BoxedDirective],
  templateUrl: './stateful-signals.component.html',
  styleUrl: './stateful-signals.component.scss'
})
export class StatefulSignalsComponent {
  service = inject(StatefulSignalsService);
  vouchers = this.service.getAllVouchers();

  removeVoucher(id: number) {
    this.service.deleteVoucher(id);
  }
}
