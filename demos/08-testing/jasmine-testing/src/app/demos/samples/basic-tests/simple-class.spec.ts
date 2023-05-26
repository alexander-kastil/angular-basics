import { SimpleClass } from './simple-class';

describe('Class - Hello world Test', () => {
  let myclass: SimpleClass;

  beforeEach(() => {
    myclass = new SimpleClass();
  });

  it('contains 12 charactes', () => {
    debugger;
    expect(myclass.sayHelloWorld().length).toEqual(12)
  });

  it('says Hello World!', () =>
    expect(myclass.sayHelloWorld()).toEqual('Hello World!'))
});
