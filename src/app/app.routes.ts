import { Routes } from '@angular/router';

import { RouterLinks } from '../enums';

export const routes: Routes = [
  {
    path: RouterLinks.dashboard,
    loadComponent: () =>
      import('./dashboard/containers/dashboard/dashboard').then(
        (m) => m.Dashboard
      ),
  },
  {
    path: RouterLinks.account,
    loadComponent: () =>
      import('./account/containers/account/account').then((m) => m.Account),
  },
  {
    path: RouterLinks.brokers,
    loadComponent: () =>
      import('./shared/components/under-development/under-development').then(
        (m) => m.UnderDevelopment
      ),
  },
  {
    path: RouterLinks.submissions,
    loadComponent: () =>
      import('./shared/components/under-development/under-development').then(
        (m) => m.UnderDevelopment
      ),
  },
  {
    path: RouterLinks.organizations,
    loadComponent: () =>
      import('./shared/components/under-development/under-development').then(
        (m) => m.UnderDevelopment
      ),
  },
  {
    path: RouterLinks.goals,
    loadComponent: () =>
      import('./shared/components/under-development/under-development').then(
        (m) => m.UnderDevelopment
      ),
  },
  {
    path: RouterLinks.admin,
    loadComponent: () =>
      import('./shared/components/under-development/under-development').then(
        (m) => m.UnderDevelopment
      ),
  },
];
