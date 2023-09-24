import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) { }

  getSkills() {
    return this.httpClient.get<Skill[]>(`${environment.api}skills`);
  }

  getSkill(id: number) {
    return this.httpClient.get<Skill>(`${environment.api}skills/${id}`);
  }

  addSkill(skill: Skill) {
    return this.httpClient.post<Skill>(`${environment.api}skills`, skill);
  }

  deleteSkill(skill: Skill) {
    return this.httpClient.delete(`${environment.api}skills`);
  }
}
