import {Qualification} from '../models/qualification.model';

export const QUALIFICATIONS: Qualification[] = [
  {
    id: 1,
    label: 'DUT Informatique',
    university: 'Université Paris Cité',
    location: 'Paris - 75016',
    description: 'Diplôme Universitaire de Technologie en Informatique, formation pluridisciplinaire orientée vers le développement logiciel, l’administration système et réseau, ainsi que la gestion de projet.',
    link: 'https://iutparis-seine.u-paris.fr/informatique/bachelor-universitaire-de-technologie-informatique/',
    courses: [1, 2, 3],
    skills: [1, 2, 3]
  },
  {
    id: 2,
    label: 'Licence Informatique',
    university: 'Université Paris Cité',
    location: 'Paris - 75016',
    description: 'Licence en Informatique, formation approfondie en algorithmique, programmation, bases de données et systèmes d’exploitation.',
    link: 'https://iutparis-seine.u-paris.fr/informatique/licence-informatique/',
    courses: [4, 5, 6],
    skills: [4, 5, 6]
  },
  {
    id: 3,
    label: 'Master Informatique',
    university: 'Université Paris Cité',
    location: 'Paris - 75016',
    description: 'Master en Informatique, spécialisation en développement logiciel avancé, architecture des systèmes et gestion de projet informatique.',
    link: 'https://iutparis-seine.u-paris.fr/informatique/master-informatique/',
    courses: [7, 8, 9],
    skills: [7, 8, 9]
  }
];
