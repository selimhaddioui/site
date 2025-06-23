import {Component, input, inject, computed} from '@angular/core';
import {Course} from '../../../models/course.model';
import {ProjectSummaryComponent} from '../../../project-page/project-summary/project-summary';
import {ProjectService} from '../../../services/project.service';
import {SkillComponent} from '../../../shared/skill/skill/skill';
import {SkillService} from '../../../services/skill.service';

@Component({
  selector: 'sh-course',
  templateUrl: './course.html',
  imports: [
    ProjectSummaryComponent,
    SkillComponent
  ],
  styleUrl: './course.scss'
})
export class CourseComponent {
  private readonly projectService = inject(ProjectService)
  private readonly skillService = inject(SkillService);
  readonly course = input.required<Course>();
  readonly projects = computed(() => this.projectService.getByIds(this.course().projects))
  readonly skills = computed(() => this.skillService.getByIds(this.course().skills));
}
