import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SkillResolverService } from './skill-resolver.service';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  declarations: [
    SkillsListComponent,
    SkillsEditComponent,
    SkillRowComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    SkillsRoutingModule
  ],
  providers: [SkillResolverService],
})
export class SkillsModule { }
