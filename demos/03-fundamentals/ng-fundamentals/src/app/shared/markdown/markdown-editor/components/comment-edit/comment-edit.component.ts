import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ColumnDirective } from '../../../../formatting/formatting-directives';
import { CommentItem } from '../../comment.model';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
  imports: [
    ColumnDirective,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
  ]
})
export class CommentEditComponent {
  @Input() comment: CommentItem = new CommentItem();
}
