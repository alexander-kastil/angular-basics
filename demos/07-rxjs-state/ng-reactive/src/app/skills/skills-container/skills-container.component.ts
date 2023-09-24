import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { combineLatestWith, map, startWith } from 'rxjs/operators';
import { SkillRowComponent } from '../skill-row/skill-row.component';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../state/skills-entity.service';
import { SkillsKpiComponent } from '../skills-kpi/skills-kpi.component';

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
    RouterLink,
    NgFor,
    SkillRowComponent,
    SkillsKpiComponent,
    AsyncPipe,
  ],
})
export class SkillsContainerComponent {
  service = inject(SkillsEntityService);
  fcToggle = new FormControl(true);

  skills = this.service.entities$.pipe(
    combineLatestWith(this.fcToggle.valueChanges.pipe(startWith(true))),
    map(([skills, showAll]) => {
      return showAll ? skills : skills.filter((sk: Skill) => sk.completed === showAll);
    })
  );

  ngOnInit(): void {
    this.service.loaded$.subscribe((loaded) => {
      if (!loaded) {
        this.service.getAll();
      }
    });
  }

  deleteItem(item: Skill): void {
    this.service.delete(item);
  }

  toggleItemComplete(item: Skill): void {
    this.service.update({ ...item, completed: !item.completed });
  }
}
