import {Routes} from '@angular/router';
import {HomePage} from './home-page/home-page';
import {ProjectPage} from './project-page/project-page';
import {ContractPage} from './contract-page/contract-page';
import {ContactPage} from './contact-page/contact-page';
import {QualificationPage} from './qualification-page/qualification-page';


export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'projects',
    component: ProjectPage,
  },
  {
    path: 'contracts',
    component: ContractPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: 'qualifications',
    component: QualificationPage,
  }
];
