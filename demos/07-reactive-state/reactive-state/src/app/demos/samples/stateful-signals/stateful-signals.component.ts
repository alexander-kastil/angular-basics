import { Component, inject } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { StatefulSignalsService } from '../vouchers/stateful-signals.service';
import { BoxedDirective } from 'src/app/shared/formatting/formatting-directives';

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
}
