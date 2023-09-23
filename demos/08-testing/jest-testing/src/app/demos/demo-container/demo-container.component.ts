import { AsyncPipe, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.development';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { MarkdownEditorComponent } from '../../shared/markdown-editor/markdown-editor.component';
import { SidePanelComponent } from '../../shared/side-panel/side-panel.component';
import { SidebarActions } from '../../shared/side-panel/sidebar.actions';
import { SidePanelService } from '../../shared/side-panel/sidepanel.service';
import { SideNavService } from '../../shared/sidenav/sidenav.service';
import { DemoService } from '../demo-base/demo.service';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatBottomSheetModule,
    RouterOutlet,
    RouterLink,
    AsyncPipe,
    NgFor,
    NgStyle,
    NgIf,
    LoadingComponent,
    MarkdownEditorComponent,
    SidePanelComponent,
  ],
})
export class DemoContainerComponent {
  destroy = inject(DestroyRef)
  router = inject(Router);
  route = inject(ActivatedRoute);
  ds = inject(DemoService);
  nav = inject(SideNavService);
  eb = inject(SidePanelService);
  bottomSheet = inject(MatBottomSheet);
  sheetRef: MatBottomSheetRef | null = null;

  title: string = environment.title;
  demos = this.ds.getItems();

  header = this.router.events
    .pipe(
      takeUntilDestroyed(this.destroy),
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      map((route: ActivatedRoute) => route.component != null
        ? `Component: ${route.component.name.substring(1)}`
        : 'Please select a demo'),
    );

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  isLoading = false;
  currentCMD = this.eb.getCommands();
  showMdEditor = false;

  constructor() {
    effect(() => {
      this.currentCMD() === SidebarActions.HIDE_MARKDOWN ? this.closeBottomSheet() : this.openBottomSheet();
    });
  }

  ngOnInit() {
    this.sheetRef?.afterDismissed().subscribe(() => {
      console.log('Sheet dismissed');
      this.eb.triggerCmd(SidebarActions.HIDE_MARKDOWN);
    });
  }

  openBottomSheet(): void {
    const config: MatBottomSheetConfig = {
      panelClass: 'bottom-sheet'
    };
    this.sheetRef = this.bottomSheet.open(MarkdownEditorComponent, config);
  }

  closeBottomSheet(): void {
    this.bottomSheet.dismiss();
  }

  sidenavMode = this.nav.getSideNavPosition();
  sidenavVisible = this.nav.getSideNavVisible();
  workbenchMargin = this.sidenavVisible.pipe(
    map((visible: boolean) => { return visible ? { 'margin-left': '5px' } : {} })
  );
}
