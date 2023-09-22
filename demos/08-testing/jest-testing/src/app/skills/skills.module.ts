import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsRoutingModule } from './skills-routing.module';

import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills-list/skills-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SkillsRoutingModule,
        SkillsListComponent,
        SkillRowComponent,
        SkillsEditComponent
    ],
})
export class SkillsModule { }
