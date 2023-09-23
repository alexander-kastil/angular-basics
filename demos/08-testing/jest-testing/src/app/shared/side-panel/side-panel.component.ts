import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SnackbarService } from '../snackbar/snackbar.service';
import { SidebarActions } from './sidebar.actions';
import { SidePanelService } from './sidepanel.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class SidePanelComponent {
  sns: SnackbarService = inject(SnackbarService);
  eb: SidePanelService = inject(SidePanelService);
  editorDisplayed: boolean = false;

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
