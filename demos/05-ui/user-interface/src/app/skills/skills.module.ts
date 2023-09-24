import { NgModule } from '@angular/core';
import { EntityDataService, EntityDefinitionService, HttpUrlGenerator } from '@ngrx/data';
import { SkillsDataService } from './state/skills-data.service';
import { SkillsEntityService } from './state/skills-entity.service';
import { entityMetadata } from './state/skills.metadata';
import { CustomUrlHttpGenerator } from './state/custom-url-generator';
import { RouterModule } from '@angular/router';
import { SKILL_ROUTES } from './skills.routes';

@NgModule({
  imports: [
    RouterModule.forChild(SKILL_ROUTES)
  ],
  providers: [
    // SkillsEntityService, SkillsDataService, {
    //   provide: HttpUrlGenerator,
    //   useClass: CustomUrlHttpGenerator,
    // },
  ],
})
export class SkillsModule {
  // constructor(
  //   entityDefinitionService: EntityDefinitionService,
  //   entityDataService: EntityDataService,
  //   skillsDataService: SkillsDataService
  // ) {
  //   entityDefinitionService.registerMetadataMap(entityMetadata);
  //   entityDataService.registerService('Skill', skillsDataService);
  // }
}
