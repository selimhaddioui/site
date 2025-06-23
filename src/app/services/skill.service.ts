import {Injectable} from '@angular/core';
import {Skill} from '../models/skill.model';
import {SKILLS} from '../data/skills';

@Injectable({providedIn: 'root'})
export class SkillService {
  private Skills: Skill[] = SKILLS;

  getAll(): Skill[] {
    return this.Skills;
  }

  getById(id: number): Skill | undefined {
    return this.Skills.find(Skill => Skill.id === id);
  }

  getByIds(ids: number[]): Skill[] {
    return this.Skills.filter(Skill => ids.includes(Skill.id));
  }
}
