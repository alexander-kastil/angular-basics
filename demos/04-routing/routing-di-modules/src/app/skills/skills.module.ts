import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SkillResolverService } from './skill-resolver.service';
import { CheckPipe } from './skill-row/check.pipe';
import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  declarations: [
    SkillsListComponent,
    SkillsEditComponent,
    SkillRowComponent,
    CheckPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SkillsRoutingModule
  ],
  providers: [SkillResolverService],
})
export class SkillsModule { }
