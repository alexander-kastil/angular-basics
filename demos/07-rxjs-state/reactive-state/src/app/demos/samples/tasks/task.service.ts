import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskItem } from './task-item.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http = inject(HttpClient);

  getTasks(): Observable<TaskItem[]> {
    return this.http
      .get<TaskItem[]>('http://localhost:3000/tasks')
      .pipe(delay(1000));
  }
}
