- Navigate to `simple.service.ts` which implements a simple service with no injection. Therefore it can be tested like a class. For more complex services, you should use the Angular testing utilities like `TestingController` and `TestBed` which are not covered in this class.

```typescript
@Injectable({
  providedIn: 'root',
})
export class SimpleMessageService {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  delete(msg: string) {
    this.messages = this.messages.filter((item) => item != msg);
  }

  clear() {
    this.messages = [];
  }
}
```