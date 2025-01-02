import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SideNavService } from '../sidenav/sidenav.service';
import { SidePanelService } from './side-panel.service';
@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ]
})
export class SidePanelComponent {
  sidePanelService = inject(SidePanelService);
  nav = inject(SideNavService);
  editorDisplayed = this.sidePanelService.getEditorVisible();
  icon = "create";

  toggleEditor() {
    this.sidePanelService.toggleEditorVisibility();
    this.icon = this.editorDisplayed() ? "close" : "create";
  }

  toggleSideNav() {
    this.nav.toggleMenuVisibility();
  }
}
