- Examine loading.service.ts

  ```typescript
  export class LoadingService {
    isLoading = new BehaviorSubject(false);
    getLoading() {
      return this.isLoading.asObservable();
    }
    setLoading(loading: boolean) {
      this.isLoading.next(loading);
    }
  }
  ```
  
- Examine loading-interceptor.ts and discuss its implementation
- Quit `json-server` using `CTRL+C`
- Select "Stateful Service" in the left Demo Menu. Watch the loading indicator.
