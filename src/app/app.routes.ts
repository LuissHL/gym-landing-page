import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './pages/components/about/about.component';
import { TrainingComponent } from './pages/components/training/training.component';

export const routes: Routes = [

  {path:'', pathMatch:'full', redirectTo: 'home'},
  {path:'home', component: PagesComponent},
  {path:'about', component: AboutComponent},
  {path: 'training', component: TrainingComponent},
];
