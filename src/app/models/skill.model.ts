import { SkillType } from '../enums/skill-type';

export interface Skill {
  id: number;
  label: string;
  type: SkillType;
  description: string;
  icon: string;
  level: number;
  courses: number[];
  projects: number[];
  contracts: number[];
}
