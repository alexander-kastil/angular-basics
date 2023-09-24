import { Component, OnInit, inject } from '@angular/core';
import { VouchersService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/vouchers.model';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-struct-directives',
    templateUrl: './struct-directives.component.html',
    styleUrls: ['./struct-directives.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        NgFor,
        FormsModule,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        AsyncPipe,
    ],
})
export class StructDirectivesComponent {
  vs = inject(VouchersService);
  persons = [{ name: 'Heinz' }, { name: 'Brunhilde' }, { name: 'Susi' }];
  selectedPerson: string = this.persons[0].name;
  vouchers$ = this.vs.getVouchers();
  showTextOne = true;
  currentDirection: DirectionEnum = DirectionEnum.East;
  direction = DirectionEnum;

  showVoucher(v: Voucher) {
    console.log(
      `navigating to voucher with text "${v.Text}" - covered later in more detail`
    );
  }
}

export enum DirectionEnum {
  East,
  West,
  North,
  South,
}
