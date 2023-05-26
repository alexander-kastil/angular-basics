import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { TaskItem } from '../tasks/task-item.model';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss'],
})
export class AsyncPipeComponent implements OnInit {
  constructor(private ts: TaskService) { }

  // Imperative Approach using subscribe
  tasks: TaskItem[] = [];

  // Declarative Reactive Approach using async pipe
  tasks$: Observable<TaskItem[]> = this.ts.getTasks();

  completed$: Observable<TaskItem[]> = this.tasks$.pipe(
    map((tasks) => tasks.filter((task) => task.completed === true)
    ));

  ngOnInit() {
    this.getDataClassic();
  }

  getDataClassic() {
    this.ts.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
}
