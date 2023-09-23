import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../skill.model';
import { SkillsService } from '../skills.service';
import { SnackbarService } from '../../shared/snackbar/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-skills-edit',
    templateUrl: './skills-edit.component.html',
    styleUrls: ['./skills-edit.component.scss'],
    standalone: true,
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatSlideToggleModule,
        MatButtonModule,
    ],
})
export class SkillsEditComponent implements OnInit {
  service = inject(SkillsService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  sns = inject(SnackbarService);
  skill: Skill = new Skill();

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log('id-param:', id);
    this.service.getSkill(id).subscribe((data) => {
      this.skill = data;
      console.log('setting skill: ', data);
    });
  }

  saveSkill() {
    this.sns.displayAlert('Warning', 'Save not implemented');
  }

  doCancel() {
    this.router.navigate(['/skills']);
  }
}
