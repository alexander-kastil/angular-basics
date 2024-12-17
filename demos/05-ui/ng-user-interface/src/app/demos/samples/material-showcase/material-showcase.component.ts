import { Component, inject } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';

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
  card = 'images/cleo-soi.jpg';
  count = 3;
  public images = ['giraffe', 'monkey', 'elefant'];

  incrementCt() {
    this.count += 1;
  }

  onLike() {
    this.sns.displayAlert('Great', 'Thank you for liking ...');
  }
}
