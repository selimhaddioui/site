import {Component, computed, inject, input} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {Skill} from '../../../models/skill.model';

@Component({
  selector: 'sh-skill',
  templateUrl: './skill.html',
  styleUrl: './skill.scss'
})
export class SkillComponent {
  readonly skill = input.required<Skill>();
}
