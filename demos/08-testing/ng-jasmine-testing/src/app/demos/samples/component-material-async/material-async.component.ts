import { Component } from '@angular/core';
import { User } from './user-model';
import { userData } from './users-data';
import { DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-material-async',
  templateUrl: './material-async.component.html',
  styleUrls: ['./material-async.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatTabsModule,
    DatePipe
],
})
export class MaterialAsyncComponent {
  displayedColumns = ['email', 'created', 'roles'];
  users: User[] = userData;
}
