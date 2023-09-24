import { Component } from '@angular/core';

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
})
export class InlineComponent {
  title = 'Inline Templates';
}
