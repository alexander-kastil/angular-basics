import { Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { StatefulSignalsService } from '../stateful-signals/stateful-signals.service';
import { SumComponent } from '../sum/sum.component';
import { StatefulVouchersComponent } from '../vouchers/stateful-vouchers/stateful-vouchers.component';

@Component({
    selector: 'app-stateful',
    templateUrl: './stateful.component.html',
    styleUrls: ['./stateful.component.scss'],
    providers: [StatefulSignalsService],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        StatefulVouchersComponent,
        SumComponent,
    ],
})
export class StatefulComponent { }
