import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { map } from 'rxjs/operators';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../state/skills-entity.service';
@Component({
  selector: 'app-skills-kpi',
  templateUrl: './skills-kpi.component.html',
  styleUrls: ['./skills-kpi.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, AsyncPipe],
})
export class SkillsKpiComponent {
  service = inject(SkillsEntityService)
  skills = this.service.entities$;
  ct = this.skills.pipe(map((arr: Skill[]) => arr.length));

  completed = this.skills.pipe(
    map((skills: Skill[]) => skills.filter((sk: Skill) => !sk.completed))
  );
}
