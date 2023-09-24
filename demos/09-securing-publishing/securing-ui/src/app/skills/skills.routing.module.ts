import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';

const routes: Routes = [
  { path: '', component: SkillsContainerComponent },
  { path: 'edit/:id', component: SkillsEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule { }
