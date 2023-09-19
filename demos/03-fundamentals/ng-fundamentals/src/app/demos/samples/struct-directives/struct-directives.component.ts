import { Component, OnInit, inject } from '@angular/core';
import { VouchersService } from '../vouchers/voucher.service';
import { Voucher } from '../vouchers/vouchers.model';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.scss'],
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
