import { Component, inject } from '@angular/core';
import { SkillsService } from '../../../skills/skills.service';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { addBusinessDays } from 'date-fns';
import { Skill } from '../../../skills/skill.model';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf, JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-services-basics',
    templateUrl: './services-basics.component.html',
    styleUrls: ['./services-basics.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCardModule, MatButtonModule, NgIf, MatProgressBarModule, JsonPipe]
})
export class ServicesBasicsComponent {
  service = inject(SkillsService);
  sns = inject(SnackbarService);
  result: any;
  loading = false;

  getSkills(): void {
    this.loading = true;
    this.service.getSkills().subscribe((data) => {
      this.result = data;
      this.loading = false;
    });
  }

  getSkillsById(): void {
    const id = 123;
    this.loading = true;
    this.service.getSkill(id).subscribe((data) => {
      this.result = data;
      this.loading = false;
    });
  }

  addSkill(): void {
    const skill = {
      id: 0,
      name: 'Cooking Pad Krapao',
      hours: 1,
      completed: false,
      dueDate: addBusinessDays(new Date(), 5),
    };
    this.loading = true;

    this.service.addSkill(skill).subscribe((response: Skill) => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Saved with id: ${response.id}`);
    });
  }

  deleteSkill(): void {
    const id = 44;
    this.service.deleteSkill(id).subscribe(() => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Deleted with id: ${id}`);
    });
  }

  updateSkill(): void {
    const skill = {
      id: 123,
      name: 'RxJS and Signals',
      hours: 10,
      completed: true,
    };

    this.service.updateSkill(skill).subscribe((response: Skill) => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Saved with id: ${response.id}`);
    });
  }
}
