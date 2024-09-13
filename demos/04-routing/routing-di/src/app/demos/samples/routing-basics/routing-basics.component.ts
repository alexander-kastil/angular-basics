import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-routing-basics',
  templateUrl: './routing-basics.component.html',
  styleUrls: ['./routing-basics.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MarkdownRendererComponent
  ],
})
export class RoutingBasicsComponent {
  router = inject(Router);

  showSkills() {
    this.router.navigate(['/main/skills']);
  }

  showSkill(id: number) {
    this.router.navigate(['/main/skills/edit', id]);
  }

  showSkillParam(id: number) {
    this.router.navigate(['/main/skills/edit', id], {
      queryParams: { readonly: true },
    });
  }
}
