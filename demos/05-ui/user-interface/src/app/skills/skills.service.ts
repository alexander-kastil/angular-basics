import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  http = inject(HttpClient);

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.api}skills`);
  }

  getSkill(id: number) {
    return this.http.get<Skill>(`${environment.api}skills/${id}`)
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${environment.api}skills`, skill);
  }

  deleteSkill(skill: Skill): Observable<any> {
    return this.http.delete(`${environment.api}skills/${skill.id}`);
  }
}
