import { Component } from '@angular/core';
import { format } from 'date-fns';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-object-literals',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ObjectsComponent {

  objectsBasics() {
    // Plain old JavaScript -> anti-pattern
    const myPerson = new Object();
    // myPerson.smile = function() {
    //   console.log;
    // };

    const otherPerson = {} as any;
    otherPerson.smile = function () {
      console.log('i am smiling');
    };

    const person: any = { Id: 1, Name: 'Giro' };
    person.walk = () => console.log(`I am ${person.Name} and I'm walking`);

    person.walk();
  }

  objectsTyped() {
    let person: { id: number; name: string };
    person = { id: 1, name: 'Susi' };

    let dog = { id: 1, name: 'Soi' };
  }

  propertyShorthand() {
    function getCarES5(brand: string, model: string) {
      return {
        brand: brand,
        model: model,
      };
    }

    // Property shorthand
    function getCar(brand: string, model: string) {
      return {
        brand,
        model,
      };
    }
  }

  destructuring() {
    let fullPerson = { firstName: 'John', name: 'Doe', age: 17, children: 5 };

    //antipattern
    // let first = fullPerson.firstName;
    // let alter = fullPerson.age;

    //destructuring
    let { firstName, age } = fullPerson;

    console.log(`${firstName}, ${age}`); //implicit cast of age
  }

  valref() {
    const person: any = { Id: 1, Name: 'Alexander' };
    let myNumber = 100;

    function passArgs(nbr: number, pers: any) {
      nbr += 1;
      pers.Name = 'Alex';
    }

    passArgs(myNumber, person);
    console.log('result for myNumber & person:', myNumber, person);

    myNumber = 500;
    person.Name = 'Alexander';

    let copy = Object.assign({}, person);
    passArgs(myNumber, copy);
    console.log(
      'result for myNumber & person using Object.assign():',
      myNumber,
      person
    );

    passArgs(myNumber, { ...person });
    console.log('result for myNumber & person using spread:', myNumber, person);
  }

  objAssign() {
    const obj = { name: 'Soi' };
    const clone = Object.assign(
      {},
      obj,
      { birth: format(new Date(), 'MMM d yy'), }
    );
    console.log(clone);

    const arr = [1, 2];

    let notArr = Object.assign({}, arr); //Object
    let isArr = Object.assign([], arr);
  }

  cloneSpread() {
    // Spread operator on objects
    const simplePerson = { name: 'Schnuppi' };
    const dataPerson = {
      birth: format(new Date(), 'MMM d yy'),
      job: 'dev dude',
    };
    const shallowClone = { ...dataPerson };
    const combinedPerson = { ...simplePerson, ...dataPerson };
    console.log(shallowClone, combinedPerson);
  }
}
