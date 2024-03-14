import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavService } from '../sidenav/sidenav.service';
import { SidePanelActions } from './side-panel.actions';
import { SidePanelService } from './side-panel.service';
@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
})
export class SidePanelComponent {
  eb = inject(SidePanelService);
  nav = inject(SideNavService);
  editorDisplayed = false;
  icon = "create";

  toggleEditor() {
    if (this.editorDisplayed) {
      this.eb.triggerCmd(SidePanelActions.HIDE_MARKDOWN);
    } else {
      this.eb.triggerCmd(SidePanelActions.SHOW_MARKDOWN);
    }
    this.editorDisplayed = !this.editorDisplayed;
    this.icon = this.editorDisplayed ? "close" : "create";
  }

  toggleSideNav() {
    this.nav.toggleMenuVisibility();
  }
}
