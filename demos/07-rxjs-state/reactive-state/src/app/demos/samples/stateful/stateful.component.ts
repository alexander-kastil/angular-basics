import { Component } from '@angular/core';
import { StatefulVoucherService } from '../vouchers/stateful-voucher.service';
import { StatefulVouchersComponent } from '../vouchers/stateful-vouchers/stateful-vouchers.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { SumComponent } from '../sum/sum.component';

@Component({
    selector: 'app-stateful',
    templateUrl: './stateful.component.html',
    styleUrls: ['./stateful.component.scss'],
    providers: [StatefulVoucherService],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        StatefulVouchersComponent,
        SumComponent,
    ],
})
export class StatefulComponent { }
