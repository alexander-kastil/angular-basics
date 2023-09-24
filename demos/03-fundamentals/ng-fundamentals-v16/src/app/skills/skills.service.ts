import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';
import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  http = inject(HttpClient);

  getSkills() {
    return this.http.get<Skill[]>(`${environment.api}skills`)
      .pipe(
        tap((data) => console.log("console.log from tap:", data)),
        delay(2000)
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
