import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-routing-basics',
    templateUrl: './routing-basics.component.html',
    styleUrls: ['./routing-basics.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatButtonModule,
        RouterLink,
    ],
})
export class RoutingBasicsComponent {
  router = inject(Router);

  showSkills() {
    this.router.navigate(['/skills']);
  }

  showSkill(id: number) {
    this.router.navigate(['/skills', id]);
  }

  showSkillParam(id: number) {
    this.router.navigate(['/skills', id], {
      queryParams: { readonly: true },
    });
  }
}
