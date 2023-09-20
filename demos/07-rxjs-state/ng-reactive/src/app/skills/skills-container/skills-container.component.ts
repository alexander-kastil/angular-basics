import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatestWith, map, startWith } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent {
  service = inject(SkillsEntityService);
  fcToggle = new FormControl(true);
  skills = this.service.entities$.pipe(
    combineLatestWith(this.fcToggle.valueChanges.pipe(startWith(true))),
    map(([skills, showAll]) => {
      return showAll ? skills : skills.filter((sk: Skill) => sk.completed === showAll);
    })
  );

  ngOnInit(): void {
    this.service.loaded$.subscribe((loaded) => {
      if (!loaded) {
        this.service.getAll();
      }
    });
  }

  addItem(): void {

    // const newItem: Skill = {
    //   id: 0,
    //   name: 'Configuration Mgmt',
    //   completed: false,
    // };
    // this.service.add(newItem);
  }

  deleteItem(item: Skill): void {
    this.service.delete(item);
  }

  toggleItemComplete(item: Skill): void {
    this.service.update({ ...item, completed: !item.completed });
  }
}
