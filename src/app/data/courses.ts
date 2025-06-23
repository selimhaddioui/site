import {Course} from '../models/course.model';

export const COURSES: Course[] = [
  {
    id: 1,
    label: 'Software Engineering',
    description: 'An introduction to software engineering principles and practices.',
    projects: [1, 2],
    skills: [1, 2, 3],
  },
  {
    id: 2,
    label: 'Web Development',
    description: 'Building dynamic websites using modern web technologies.',
    projects: [3],
    skills: [1, 2, 3],
  },
  {
    id: 3,
    label: 'Architecture Logicielle',
    description: 'Ce cours aborde les principes fondamentaux de l\'architecture logicielle, y compris les modèles d\'architecture, les styles architecturaux et les pratiques de conception.',
    projects: [1, 2],
    skills: [1, 2, 3],
  }
];
