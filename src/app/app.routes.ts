import { Routes } from '@angular/router';

import { RouterLinks } from '../enums';

export const routes: Routes = [
  {
    path: RouterLinks.dashboard,
    loadComponent: () => import('./dashboard/containers/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: RouterLinks.account,
    loadComponent: () => import('./account/containers/account/account').then(m => m.Account)
  }
];
