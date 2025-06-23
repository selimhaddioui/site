import {Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page';
import {ProjectPageComponent} from './project-page/project-page';
import {ContractPageComponent} from './contract-page/contract-page';
import {ContactPageComponent} from './contact-page/contact-page';
import {QualificationPageComponent} from './qualification-page/qualification-page';


export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
  },
  {
    path: 'contracts',
    component: ContractPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'qualifications',
    component: QualificationPageComponent,
  }
];
