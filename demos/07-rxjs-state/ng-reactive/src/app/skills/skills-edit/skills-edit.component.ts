import { Component, Input, OnInit, SimpleChanges, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.scss'],
})
export class SkillsEditComponent {
  @Input() id: number = 0;
  router = inject(Router);
  sns = inject(SnackbarService);
  es = inject(SkillsEntityService);
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
        this.es.getByKey(id).subscribe((skill) => {
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
      this.es.add(skill);
    }
    else {
      this.es.update(skill);
    }
    this.router.navigate(['/skills']);
  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
