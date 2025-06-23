import {Component, input, inject, computed} from '@angular/core';
import {Qualification} from '../../models/qualification.model';
import {CourseComponent} from './course/course';
import {CourseService} from '../../services/course.service';
import {SkillService} from '../../services/skill.service';
import {SkillComponent} from '../../shared/skill/skill/skill';

@Component({
  selector: 'sh-qualification',
  templateUrl: './qualification.html',
  standalone: true,
  imports: [
    CourseComponent,
    SkillComponent
  ],
  styleUrl: './qualification.scss'
})
export class QualificationComponent {
  private readonly courseService = inject(CourseService);
  private readonly skillService = inject(SkillService);
  readonly qualification = input.required<Qualification>();
  readonly courses = computed(() => this.courseService.getByIds(this.qualification().courses));
  readonly skills = computed(() => this.skillService.getByIds(this.qualification().skills));
}
