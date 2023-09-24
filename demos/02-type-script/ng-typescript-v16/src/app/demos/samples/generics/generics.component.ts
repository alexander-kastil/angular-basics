import { Component, OnInit } from '@angular/core';
import { Voucher } from '../model';

@Component({
  selector: 'app-generics',
  templateUrl: './generics.component.html',
  styleUrls: ['./generics.component.scss'],
})
export class GenericsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  genericFunctions() {
    function concat<T>(arg: Array<T>): string {
      let result = '';
      for (let m of arg) {
        result += m.toString() + ', ';
      }
      return result;
    }

    const stringArr: Array<string> = ['Alex', 'Giro', 'Soi the Whippet'];
    console.log(concat<string>(stringArr));

    const nbrArr: Array<number> = [100, 201, 322];
    console.log(concat<number>(nbrArr));
  }

  genericPartial() {
    const v: Voucher = {
      ID: 5,
      Text: 'Inserted by WebApi',
      Amount: 0,
      Date: new Date(),
      Paid: false,
      Expense: false,
      Remark: false,
      Details: [],
    };

    console.log(v);

    const vp: Partial<Voucher> = {
      Text: 'Inserted by WebApi',
      Amount: 0,
      Date: new Date(),
    };
  }

  genericClassesInterfaces() {
    interface IInventory<T> {
      getNewestItem: () => T;
      addItem: (newItem: T) => void;
      getAllItems: () => Array<T>;
    }

    let voucherInventory: IInventory<Voucher>;

    class Catalog<T> implements IInventory<T> {
      private items = new Array<T>();

      addItem(newItem: T) {
        this.items.push(newItem);
      }

      getNewestItem(): T {
        return this.items[this.items.length - 1];
      }

      getAllItems(): T[] {
        return this.items;
      }
    }

    const cat = new Catalog<Voucher>();
    let v: Voucher = {
      ID: 1,
      Text: 'Media Markt',
      Amount: 22,
      Date: new Date(),
      Paid: false,
      Expense: true,
    };
    cat.addItem(v);
    console.log('Items in the catalog', cat.getAllItems);
  }

  genericConstraints() {
    interface ICatalogItem {
      catalogNumber: number;
    }

    interface IInventory<T> {
      getAllItems: () => Array<T>;
    }

    class Catalog<T extends ICatalogItem> implements IInventory<T> {
      private items = new Array<T>();
      getAllItems(): T[] {
        return this.items;
      }
    }
  }
}
