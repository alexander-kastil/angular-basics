import { Component, inject } from '@angular/core';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-material-showcase',
  templateUrl: './material-showcase.component.html',
  styleUrls: ['./material-showcase.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatButtonToggleModule
  ],
})
export class MaterialShowCaseComponent {
  sns = inject(SnackbarService);
  card = '/assets/images/cleo-soi.jpg';
  count = 3;
  public images = ['giraffe', 'monkey', 'elefant'];

  incrementCt() {
    this.count += 1;
  }

  onLike() {
    this.sns.displayAlert('Great', 'Thank you for liking ...');
  }
}
