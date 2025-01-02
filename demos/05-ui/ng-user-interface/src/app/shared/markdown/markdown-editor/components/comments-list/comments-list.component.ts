import { Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CommentItem } from '../../comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
  imports: [MatButton]
})
export class CommentsListComponent {
  readonly Comments = input<CommentItem[] | null>(null);
  onCommentEdit = output<CommentItem>();
  onCommentDelete = output<CommentItem>();

  editComment(item: CommentItem) {
    this.onCommentEdit.emit(item);
  }

  deleteComment(item: CommentItem) {
    this.onCommentDelete.emit(item);
  }
}
