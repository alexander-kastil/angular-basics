import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../skills.service';
import { Skill } from '../skill.model';
import { SkillRowComponent } from '../skill-row/skill-row.component';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-skills-list',
    templateUrl: './skills-list.component.html',
    styleUrls: ['./skills-list.component.scss'],
    standalone: true,
    imports: [
        MatToolbarModule,
        MatButtonModule,
        RouterLink,
        MatCardModule,
        NgFor,
        SkillRowComponent,
    ],
})
export class SkillsListComponent implements OnInit {
  constructor(private service: SkillsService) {}

  skills: Skill[] = [];

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  getNextId(): number {
    return (
      this.skills.reduce((accumulator: number, currSkill: Skill) => {
        return (accumulator =
          accumulator > currSkill?.id ? accumulator : currSkill?.id);
      }, 0) + 1
    );
  }
}
