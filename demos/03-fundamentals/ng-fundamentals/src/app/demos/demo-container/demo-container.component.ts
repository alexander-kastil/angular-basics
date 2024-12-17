import { NgStyle } from '@angular/common';
import { Component, computed, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { EditorContainerComponent } from '../../shared/markdown-editor/components/editor-container/editor-container.component';
import { SidePanelComponent } from '../../shared/side-panel/side-panel.component';
import { SidePanelService } from '../../shared/side-panel/side-panel.service';
import { SideNavService } from '../../shared/sidenav/sidenav.service';
import { DemoService } from '../demo-base/demo.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    NgStyle,
    RouterOutlet,
    SidePanelComponent,
    EditorContainerComponent,
    MatIconModule
  ]
})
export class DemoContainerComponent {
  destroy = inject(DestroyRef)
  router = inject(Router);
  route = inject(ActivatedRoute);
  ds = inject(DemoService);
  nav = inject(SideNavService);
  sidePanel = inject(SidePanelService);
  sideNav = inject(SideNavService);

  title: string = environment.title;
  demos = toSignal(this.ds.getItems());

  header = toSignal(this.router.events
    .pipe(
      takeUntilDestroyed(this.destroy),
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route = this.route;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.component != null
          ? `Component: ${route.component.name.substring(1)}`
          : 'Please select a demo';
      })
    ));

  isLoading = false;

  showMdEditor = this.sidePanel.getEditorVisible();

  sidenavMode = this.sideNav.getSideNavPosition();
  sidenavVisible = this.sideNav.getSideNavVisible();
  workbenchMargin = computed(() => this.sidenavVisible() ? { 'margin-left': '5px' } : { 'margin-left': '0px' });
}
