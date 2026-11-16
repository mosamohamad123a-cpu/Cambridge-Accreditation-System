import { Routes } from '@angular/router';

import { Home } from './home/home';
import { TrainingCenters } from './training-centers/training-centers';
import { Trainers } from './trainers/trainers';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'training-centers', component: TrainingCenters },
  { path: 'trainers', component: Trainers },
  { path: '**', redirectTo: '' },
];
