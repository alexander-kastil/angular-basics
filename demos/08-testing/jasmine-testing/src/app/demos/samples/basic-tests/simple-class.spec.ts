import { SimpleClass } from './simple-class';

describe('Class - Hello world Test', () => {
  let myClass: SimpleClass;

  beforeEach(() => {
    myClass = new SimpleClass();
  });

  it('contains 12 characters', () => {
    expect(myClass.sayHelloWorld().length).toEqual(12)
  });

  it('says Hello World!', () =>
    expect(myClass.sayHelloWorld()).toEqual('Hello World!'))
});
