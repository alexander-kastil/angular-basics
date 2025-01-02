- `Signals` are a new feature in Angular that allow you to create `reactive streams` of data without using `Observables`. Signals are simpler and more efficient than Observables, and they can be used to implement stateful services or the event bus pattern in a declarative way. Signals are also compatible with Observables, so you can easily convert between them if needed.

  ```typescript
  @Injectable({ providedIn: 'root' })
  export class SidePanelService {
    #commands = signal<SidePanelActions>(SidePanelActions.HIDE_MARKDOWN);

    getCommands() {
      return computed(() => this.#commands());
    }

    triggerCmd(action: SidePanelActions) {
      this.#commands.set(action);
    }
  }
  ```

- Examine it's use in `demo-container.component.html` and the fact that using Signals in the template spares your from using the async pipe

  ```html
  @if (showMdEditor) {
    <div class="gdEditor">
      <app-markdown-editor></app-markdown-editor>
    </div>
  }
  ```

- `SideNavService` implemented in `sidenav.service.ts` is another example for the `event bus pattern`. It is triggered using the hamburger menu in the side panel and in the navbar. 

  ```typescript
  export class SideNavService {
    http = inject(HttpClient);
    breakpointObserver = inject(BreakpointObserver);
    visible = signal(true);
    position = signal<MatDrawerMode>('side');
  ```

- The Signals is the processer by the Material Sidenav component in `demo.component.html`:

  ```html
  <mat-sidenav-container>
    <mat-sidenav #sidenav 
      [opened]="navVisible()" 
      [mode]="navPosition()">
  ```