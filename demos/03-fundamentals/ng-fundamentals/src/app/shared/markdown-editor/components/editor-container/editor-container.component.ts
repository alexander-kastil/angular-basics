import { Component, effect, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ColumnDirective } from '../../../formatting/formatting-directives';
import { CommentItem } from '../../comment.model';
import { editorStore } from '../../editor.store';
import { CommentEditComponent } from '../comment-edit/comment-edit.component';
import { CommentsListComponent } from '../comments-list/comments-list.component';

@Component({
  selector: 'app-editor-container',
  templateUrl: './editor-container.component.html',
  styleUrls: ['./editor-container.component.scss'],
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    ColumnDirective,
    CommentsListComponent,
    CommentEditComponent,
    MatCardActions,
    MatButton
  ]
})
export class EditorContainerComponent {
  store = inject(editorStore)
  comments = this.store.comments;
  loading = this.store.loading;
  editorEdit = false;
  current: CommentItem | null = null;

  completedEffect = effect(() => {
    if (this.loading() == false) {
      this.editorEdit = false;
    }
  });

  addComment() {
    this.current = new CommentItem();
    this.editorEdit = true;
  }

  saveComment() {
    if (this.current) {
      this.store.saveComment(this.current);
    }
  }

  deleteComment(item: CommentItem) {
    this.store.deleteComment(item);
  }

  editComment(item: CommentItem) {
    this.current = { ...item };
    this.editorEdit = true;
  }
}
