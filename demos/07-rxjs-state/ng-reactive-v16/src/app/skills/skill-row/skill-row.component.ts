import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { Skill } from '../skill.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillRowComponent {
  @Input() skill: Skill = new Skill();
  @Output() itemDeleted: EventEmitter<Skill> = new EventEmitter();
  @Output() itemCompleted: EventEmitter<Skill> = new EventEmitter();
  fcCompleted = new FormControl(false)

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skill']) {
      this.fcCompleted.patchValue(this.skill.completed);
    }
  }

  deleteItem(): void {
    this.itemDeleted.emit(this.skill);
  }

  toggleItemCompleted(item: Skill): void {
    this.itemCompleted.emit(item);
  }
}
