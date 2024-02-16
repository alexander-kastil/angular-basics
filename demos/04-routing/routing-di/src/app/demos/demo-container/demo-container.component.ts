import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { MarkdownEditorComponent } from '../../shared/markdown-editor/markdown-editor.component';
import { SidePanelComponent } from '../../shared/side-panel/side-panel.component';
import { SidePanelActions } from '../../shared/side-panel/side-panel.actions';
import { SidePanelService } from '../../shared/side-panel/side-panel.service';
import { SideNavService } from '../../shared/sidenav/sidenav.service';
import { DemoService } from '../demo-base/demo.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    RouterLink,
    NgStyle,
    LoadingComponent,
    RouterOutlet,
    MarkdownEditorComponent,
    SidePanelComponent,
    AsyncPipe,
    MatIconModule
  ],
})
export class DemoContainerComponent {
  destroy = inject(DestroyRef)
  router = inject(Router);
  route = inject(ActivatedRoute);
  ds = inject(DemoService);
  nav = inject(SideNavService);
  eb = inject(SidePanelService);

  title: string = environment.title;
  demos = this.ds.getDemos();

  header = this.router.events
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
    );

  isLoading = false;

  currentCMD = this.eb.getCommands();
  showMdEditor = false;

  navPosition = this.nav.getSideNavPosition();
  navVisible = this.nav.getSideNavVisible();
  workbenchMargin = {}

  constructor() {
    effect(() => {
      this.showMdEditor = this.currentCMD() === SidePanelActions.HIDE_MARKDOWN ? false : true;
    });

    effect(() => {
      this.workbenchMargin = this.navVisible() ? { 'margin-left': '0.5rem' } : {};
    })
  }
}
