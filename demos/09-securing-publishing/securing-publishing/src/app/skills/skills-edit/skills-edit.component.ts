import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { Skill } from '../skill.model';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
})
export class SkillsEditComponent {
  @Input({ required: true }) id = 0;
  router = inject(Router);
  sns = inject(SnackbarService);
  service = inject(SkillsService);
  fb = inject(FormBuilder);
  skill: Skill = new Skill();

  skillForm = this.fb.nonNullable.group({
    name: ["", Validators.required],
    id: [0],
    completed: [false],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      const id = changes['id'].currentValue;
      if (id == 0) {
        this.skillForm.patchValue(new Skill());
      }
      else {
        this.service.getSkill(id).subscribe((skill) => {
          if (skill) {
            this.skillForm.patchValue(skill);
          }
        });
      }
    }
  }

  saveSkill(skillForm: FormGroup) {
    const skill = skillForm.value as Skill;
    console.log("saveSkill", skill);
    if (skill.id == 0) {
      this.service.addSkill(skill);
    }
    else {
      this.service.updateSkill(skill);
    }
    this.router.navigate(['main/skills']);
  }

  doCancel() {
    this.router.navigate(['main/skills']);
  }
}
