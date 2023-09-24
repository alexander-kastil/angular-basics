import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Skill } from '../skill.model';
import { CheckPipe } from './check.pipe';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-skill-row',
    templateUrl: './skill-row.component.html',
    styleUrls: ['./skill-row.component.scss'],
    standalone: true,
    imports: [
        MatButtonModule,
        RouterLink,
        MatIconModule,
        CheckPipe,
    ],
})
export class SkillRowComponent {
  @Input() skill: Skill = new Skill();
  @Output() editItem: EventEmitter<Skill> = new EventEmitter();

  edit(item: Skill): void {
    this.editItem.emit(item);
  }
}
