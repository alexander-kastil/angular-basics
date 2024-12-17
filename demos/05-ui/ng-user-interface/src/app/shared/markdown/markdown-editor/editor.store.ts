import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { CommentItem } from './comment.model';
import { CommentService } from './comment.service';

export type EditorState = {
    comments: CommentItem[];
    loading: boolean;
};

export const initialEditorState: EditorState = {
    comments: [],
    loading: false,
};

const logError = (error: Error) => console.error("error: ", error);

export const editorStore = signalStore(
    { providedIn: 'root', protectedState: false },
    withState(initialEditorState),
    withMethods((store, service = inject(CommentService)) => ({
        fetchComments: rxMethod<void>(
            pipe(
                switchMap(() => {
                    patchState(store, { loading: true });
                    return service.getComments().pipe(
                        tapResponse({
                            next: (comments) => patchState(store, { comments }),
                            error: logError,
                            finalize: () => patchState(store, { loading: false }),
                        })
                    )
                }),
            )
        ),
        deleteComment: rxMethod<CommentItem>(
            pipe(
                switchMap((comment: CommentItem) => {
                    patchState(store, { loading: true });
                    return service.deleteComment(comment).pipe(
                        tapResponse({
                            next: () => patchState(store, { comments: store.comments().filter((c) => c.id !== comment.id) }),
                            error: logError,
                            finalize: () => patchState(store, { loading: false }),
                        })
                    )
                }),
            )
        ),
        saveComment: rxMethod<CommentItem>(
            pipe(
                switchMap((comment: CommentItem) => {
                    patchState(store, { loading: true });
                    return service.saveComment(comment).pipe(
                        tapResponse({
                            next: (savedComment) => {
                                const comments = store.comments();
                                const idx = comments.findIndex((c) => c.id === savedComment.id);
                                if (idx > -1) {
                                    comments[idx] = savedComment;
                                } else {
                                    comments.push(savedComment);
                                }
                                patchState(store, { comments });
                            },
                            error: logError,
                            finalize: () => patchState(store, { loading: false }),

                        }))
                },

                ))),
    })),
    withHooks({
        onInit: (store) => store.fetchComments(),
    })
)