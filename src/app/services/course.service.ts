import {Injectable} from '@angular/core';
import {Course} from '../models/course.model';
import {COURSES} from '../data/courses';

@Injectable({providedIn: 'root'})
export class CourseService {
  private Courses: Course[] = COURSES;

  getAll(): Course[] {
    return this.Courses;
  }

  getById(id: number): Course | undefined {
    return this.Courses.find(Course => Course.id === id);
  }

  getByIds(ids: number[]): Course[] {
    return this.Courses.filter(Course => ids.includes(Course.id));
  }
}
