import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../skill.model';
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
    ],
})
export class SkillRowComponent implements OnInit {
  @Input() skill: Skill = new Skill();
  @Output() editItem: EventEmitter<Skill> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  edit(item: Skill): void {
    this.editItem.emit(item);
  }
}
