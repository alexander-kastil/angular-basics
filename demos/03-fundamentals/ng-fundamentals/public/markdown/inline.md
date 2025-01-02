 - Most Angular Developers like splitting their components to multiple files as it provides separation of concerns and makes the code more readable.

 - Angular also allow the use of inline templates and styles. This is done by using the `template` and `styles` properties of the `@Component` decorator. Make sure to use backticks to allow multiline text.

  ```typescript
  @Component({
    selector: 'app-inline',
    template: `
      <app-markdown-renderer [md]="'inline'"></app-markdown-renderer>
      <mat-card appearance="outlined">
        <mat-card-header>
          <mat-card-title>{{ title }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          By using backticks I can use multiline text
        </mat-card-content>
      </mat-card>
    `,
    styleUrls: ['./inline.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCardModule],
  })
  export class InlineComponent {
    title = 'Inline Templates';
  }
  ```