export class VoucherDetail {
  ID: number = 0;
  VoucherID: number = 0;
  AccountID: number = 0;
  Account: BalanceAccount | null = null;
  Text: string = '';
  Amount: number = 0;
  Comment: string = '';
}

export class BalanceAccount {
  ID: number = 0;
  Name: string = '';
  Expense: boolean = false;
  VoucherDetails: VoucherDetail[] = new Array();
}

export class Voucher {
  ID = "0";
  Text = '';
  Date = '';
  Amount = 0;
  Paid = false;
  Expense = false;
  Remark?: boolean;
  Readonly?: boolean;
  Details?: VoucherDetail[];
}
