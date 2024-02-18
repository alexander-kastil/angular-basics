import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { combineLatestWith, map, startWith } from 'rxjs/operators';
import { SkillRowComponent } from '../skill-row/skill-row.component';
import { Skill } from '../skill.model';
import { SkillsService } from '../skills.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    RouterLink,
    SkillRowComponent,
    AsyncPipe
  ],
})
export class SkillsContainerComponent {
  service = inject(SkillsService);
  fcToggle = new FormControl(true);
  loading = false;

  skills: Observable<Skill[]> | null = null;

  constructor() {
    this.loadSkills();
  }

  loadSkills(): void {
    this.skills = this.service.getSkills().pipe(
      combineLatestWith(this.fcToggle.valueChanges.pipe(startWith(true))),
      map(([skills, showAll]) => {
        return showAll ? skills : skills.filter((sk: Skill) => sk.completed === showAll);
      })
    );
  }

  deleteSkills(skill: Skill): void {
    this.service.deleteSkill(skill.id).subscribe(() => {
      this.loadSkills();
    });
  }

  toggleSkillComplete(item: Skill): void {
    this.service.updateSkill({ ...item, completed: !item.completed }).subscribe(() => {
      this.loadSkills();
    });
  }
}
