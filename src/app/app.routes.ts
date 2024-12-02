import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  loadComponent: () => import('./shared/dashboard/dashboard.component').then((m) => m.DashboardComponent)
}];
