import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { addBusinessDays } from 'date-fns';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { Skill } from './skill.model';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-services-basics',
  templateUrl: './services-basics.component.html',
  styleUrls: ['./services-basics.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    JsonPipe,
  ],
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

  getSkillsById(id: number): void {
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
    const id = 2;
    this.service.deleteSkill(id).subscribe(() => {
      this.loading = false;
      this.sns.displayAlert('json-server', `Deleted with id: ${id}`);
    });
  }

  updateSkill(): void {
    const skill = {
      id: 1,
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
