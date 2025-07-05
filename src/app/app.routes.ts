import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/containers/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/containers/account/account').then(m => m.Account)
  }
];
