import {Component, input, inject, computed} from '@angular/core';
import {Project} from '../../models/project.model';
import {RouterLink} from '@angular/router';
import {SkillComponent} from '../../shared/skill/skill/skill';
import {SkillService} from '../../services/skill.service';

@Component({
  selector: 'sh-project-summary',
  imports: [
    RouterLink,
    SkillComponent
  ],
  templateUrl: './project-summary.html',
  styleUrl: './project-summary.scss'
})
export class ProjectSummaryComponent {
  project = input.required<Project>();
  private readonly skillService = inject(SkillService);
  readonly skills = computed(() => this.skillService.getByIds(this.project().skills));

}
