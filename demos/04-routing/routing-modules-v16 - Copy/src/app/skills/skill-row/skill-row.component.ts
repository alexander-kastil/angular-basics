import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
})
export class SkillRowComponent {
  @Input() skill: Skill = new Skill();
  @Output() editItem: EventEmitter<Skill> = new EventEmitter();

  edit(item: Skill): void {
    this.editItem.emit(item);
  }
}
