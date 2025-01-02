export class VoucherDetail {
  ID = 0;
  VoucherID = 0;
  AccountID = 0;
  Account: BalanceAccount | null = null;
  Text = '';
  Amount = 0;
  Comment = '';
}

export class BalanceAccount {
  ID = 0;
  Name = '';
  Expense = false;
  VoucherDetails: VoucherDetail[] = [];
}

export class Voucher {
  ID = 0;
  Text = '';
  Date = '';
  Amount = 0;
  Paid = false;
  Expense = false;
  Remark?: boolean;
  Readonly?: boolean;
  Details?: VoucherDetail[];
}
