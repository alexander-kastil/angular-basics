import { VoucherValidator } from './voucher-validator';
import { good } from './voucher.data';
import { Voucher } from './voucher.mode';

describe('Class - VoucherValidator', () => {
  let goodVoucher: Voucher;
  let badVoucher: Voucher;
  let nullVoucher: Voucher;

  beforeEach(() => {
    // imported from voucher.data
    goodVoucher = good;

    badVoucher = {
      ID: 2,
      Text: 'BP Tankstelle',
      Date: '2016-11-15T00:00:00',
      Amount: 650,
      Paid: false,
      Expense: false,
      Remark: true,
      Details: [
        {
          ID: 2,
          VoucherID: 3,
          AccountID: 1,
          Text: 'USB Stick',
          Amount: 11,
          Comment: "",
        },
        {
          ID: 7,
          VoucherID: 3,
          AccountID: 6,
          Text: 'Game of Thrones, Season 4',
          Amount: 55,
          Comment: "",
        },
      ],
    };

    nullVoucher = {
      ID: 2,
      Text: 'BP Tankstelle',
      Date: '2016-11-15T00:00:00',
      Amount: 650,
      Paid: false,
      Expense: false,
      Remark: true,
    };
  });

  it('returns true when correct data is passed', () =>
    expect(VoucherValidator.validate(goodVoucher)).toEqual(true));
  it('returns false when bad data is passed', () =>
    expect(VoucherValidator.validate(badVoucher)).toEqual(false));
  it('returns false when null is passed as Details', () =>
    expect(VoucherValidator.validate(nullVoucher)).toEqual(false));
});