import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Skill } from '../skill.model';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    RouterLink,
  ],
})
export class SkillRowComponent {
  @Input({ required: true }) skill: Skill = new Skill();
  @Output() itemDeleted: EventEmitter<Skill> = new EventEmitter();
  @Output() itemCompleted: EventEmitter<Skill> = new EventEmitter();
  fcCompleted = new FormControl(false, { nonNullable: true })

  ngOnInit(): void {
    this.fcCompleted.valueChanges.subscribe(() => {
      this.itemCompleted.emit(this.skill);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skill']) {
      this.fcCompleted.patchValue(this.skill.completed);
    }
  }

  deleteItem(): void {
    this.itemDeleted.emit(this.skill);
  }
}
