import { Component, inject } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { ThemeService } from '../theme/theme.service';
import { SidebarActions } from './sidebar.actions';
import { SidePanelService } from './sidepanel.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
    ],
})
export class SidePanelComponent {
  sns: SnackbarService = inject(SnackbarService);
  eb: SidePanelService = inject(SidePanelService);
  ts: ThemeService = inject(ThemeService);
  editorDisplayed: boolean = false;

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    this.eb.triggerCmd(
      this.editorDisplayed
        ? SidebarActions.SHOW_MARKDOWN
        : SidebarActions.HIDE_MARKDOWN
    );
    this.editorDisplayed = !this.editorDisplayed;
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }
}
