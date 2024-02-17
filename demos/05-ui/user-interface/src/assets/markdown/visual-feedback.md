- Angular's [Deferrable Views](https://angular.io/guide/defer) feature allows you to defer the rendering of a component until it is needed. 

- This can be useful for improving the initial load time of your application, especially if you have components that are not immediately visible to the user. In this case a progress bar is displayed while the component is being loaded.

- Examine `skills-container.component.html` and its use of `@dever` and  @placeholder`

    ```typescript
    @defer (when skills | async) {
        @for (sk of skills | async; track sk) {
            <div class="item">
                <app-skill-row
                    [skill]="sk"
                    (itemDeleted)="deleteSkills($event)"
                    (itemCompleted)="toggleSkillComplete($event)">
                </app-skill-row>
            </div>
        }
    } @placeholder  {
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    } @error {
        <div class="error">Errors happen</div>
    }
    ```