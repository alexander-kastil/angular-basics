import { Component, OnInit } from '@angular/core';
import { DemoContainerComponent } from '../../demo-container/demo-container.component';
import { RouteGuardsComponent } from '../route-guards/route-guards.component';
import { RoutingBasicsComponent } from '../routing-basics/routing-basics.component';
import { PreloadComponent } from '../preload/preload.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-child-routes',
    templateUrl: './child-routes.component.html',
    styleUrls: ['./child-routes.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent],
})
export class ChildRoutesComponent implements OnInit {
  demoRoutes: any;

  constructor() {}

  ngOnInit() {
    this.demoRoutes = [
      {
        path: '',
        component: DemoContainerComponent,
        children: [
          { path: 'routingbasics', component: RoutingBasicsComponent },
          { path: 'childroutes', component: ChildRoutesComponent },
          { path: 'routeguards', component: RouteGuardsComponent },
          { path: 'preload', component: PreloadComponent },
        ],
      },
    ];
  }
}
