import { Router } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-routing-basics',
  templateUrl: './routing-basics.component.html',
  styleUrls: ['./routing-basics.component.scss'],
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
