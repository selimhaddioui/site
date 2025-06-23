import {Project} from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    label: "Conception d'une application de gestion de bibliothèque",
    functionalDescription: "Ce projet consiste à concevoir une application de gestion de bibliothèque permettant aux utilisateurs de gérer les emprunts et retours de livres.",
    technicalDescription: "L'application est développée en Java avec Spring Boot pour le backend et Angular pour le frontend. Elle utilise une base de données MySQL pour stocker les informations sur les livres et les utilisateurs.",
    githubLink: "https://github.com/selimhaddioui",
    liveLink: "https://github.com/selimhaddioui",
    skills: [1, 2, 3, 4],
  },
  {
    id: 2,
    label: "Développement d'une application de gestion de tâches",
    functionalDescription: "Ce projet consiste à développer une application de gestion de tâches permettant aux utilisateurs de créer, modifier et supprimer des tâches.",
    technicalDescription: "L'application est développée en Python avec Flask pour le backend et React pour le frontend. Elle utilise une base de données PostgreSQL pour stocker les informations sur les tâches.",
    githubLink: "https://github.com/selimhaddioui/",
    liveLink: "https://github.com/selimhaddioui/",
    skills: [1, 2, 3, 4],
  },
  {
    id: 3,
    label: "Création d'un site web de portfolio",
    functionalDescription: "Ce projet consiste à créer un site web de portfolio pour présenter mes compétences et mes projets.",
    technicalDescription: "Le site est développé en HTML, CSS et JavaScript. Il utilise le framework Bootstrap pour le design et la mise en page.",
    githubLink: "https://github.com/selimhaddioui/",
    liveLink: "https://github.com/selimhaddioui/",
    skills: [1, 2, 3, 4],
  },
  {
    id: 4,
    label: "Développement d'une application de gestion de contacts",
    functionalDescription: "Ce projet consiste à développer une application de gestion de contacts permettant aux utilisateurs de gérer leurs contacts personnels et professionnels.",
    technicalDescription: "L'application est développée en Ruby on Rails pour le backend et Vue.js pour le frontend. Elle utilise une base de données MongoDB pour stocker les informations sur les contacts.",
    githubLink: "https://github.com/selimhaddioui/",
    liveLink: "https://github.com/selimhaddioui/",
    skills: [1, 2, 3, 4],
  }
]
