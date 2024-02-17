import { Component, DestroyRef, OnInit, effect, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SidebarActions } from 'src/app/shared/side-panel/sidebar.actions';
import { SidePanelService } from 'src/app/shared/side-panel/sidepanel.service';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../shared/loading/loading.service';
import { SideNavService } from '../../shared/sidenav/sidenav.service';
import { DemoService } from '../demo-base/demo.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
  destroy = inject(DestroyRef);
  router = inject(Router);
  route = inject(ActivatedRoute);
  ds = inject(DemoService);
  nav = inject(SideNavService);
  ls = inject(LoadingService);
  eb = inject(SidePanelService);

  title: string = environment.title;
  header = 'Please select a demo';
  demos = this.ds.getItems();

  isLoading = false;

  // sets default behavior for sidenav
  sidenavMode = this.nav.getSideNavPosition();
  sidenavVisible = this.nav.getSideNavVisible();

  workbenchMargin = this.sidenavVisible.pipe(
    map((visible: boolean) => { return visible ? { 'margin-left': '5px' } : {} })
  );

  currentCMD = this.eb.getCommands()
  showMdEditor: boolean = false;

  constructor() {
    effect(() => {
      this.showMdEditor = this.currentCMD() === SidebarActions.HIDE_MARKDOWN ? false : true;
    });

    this.ls.getLoading().pipe(takeUntilDestroyed(this.destroy)).subscribe((value) => {
      Promise.resolve(null).then(() => (this.isLoading = value));
    });
  }


  ngOnInit() {
    this.setComponentMetadata();
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  setComponentMetadata() {
    this.router.events
      .pipe(
        takeUntilDestroyed(this.destroy),
        filter((event) => event instanceof NavigationEnd),
        map(() => this.rootRoute(this.route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary')
      )
      .subscribe((route: ActivatedRoute) => {
        this.header =
          route.component != null
            ? `Component: ${route.component.name.substring(1)}`
            : '';
      });
  }
}
