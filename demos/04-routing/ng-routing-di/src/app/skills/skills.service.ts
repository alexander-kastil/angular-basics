import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  http = inject(HttpClient);

  getSkills() {
    return this.http.get<Skill[]>(`${environment.api}skills`)
      .pipe(
        tap((data) => console.log("console.log from tap:", data)),
        //mock delay in order to see the the progress bar
        delay(1000)
      );
  }

  getSkill(id: number) {
    return this.http.get<Skill>(`${environment.api}skills/${id}`);
  }

  addSkill(skill: Skill) {
    return this.http.post<Skill>(`${environment.api}skills`, skill);
  }

  deleteSkill(id: number) {
    return this.http.delete(`${environment.api}skills/${id}`);
  }

  updateSkill(skill: Skill) {
    return this.http.put<Skill>(`${environment.api}skills/${skill.id}`, skill);
  }
}
