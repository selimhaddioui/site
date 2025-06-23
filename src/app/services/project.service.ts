import {Injectable} from '@angular/core';
import {Project} from '../models/project.model';
import {PROJECTS} from '../data/projects';

@Injectable({providedIn: 'root'})
export class ProjectService {
  private Projects: Project[] = PROJECTS;

  getAll(): Project[] {
    return this.Projects;
  }

  getById(id: number): Project | undefined {
    return this.Projects.find(Project => Project.id === id);
  }

  getByIds(ids: number[]): Project[] {
    return this.Projects.filter(Project => ids.includes(Project.id));
  }
}
