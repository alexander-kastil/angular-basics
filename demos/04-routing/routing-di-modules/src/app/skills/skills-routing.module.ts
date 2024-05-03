import { RouterModule, Routes } from '@angular/router';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { NgModule } from '@angular/core';


export const skillsRoutes: Routes = [
  {
    path: '',
    component: SkillsListComponent,

  },
  { path: ':id', component: SkillsEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(skillsRoutes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule { }