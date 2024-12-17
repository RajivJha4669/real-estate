import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { DetailsComponent } from './shared/details/details.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { META } from './common/constant/meta-data';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
        data: {
          title: META.dashboard.title,
          description: META.dashboard.description,
          keywords: META.dashboard.keywords,
        },
      },
      {
        path: 'project/:id',
        component: DetailsComponent,
        title: 'Projects',
        data: {
          title: META.projectDetails.title,
          description: META.projectDetails.description,
          keywords: META.projectDetails.keywords,
        },
      },
    ],
  },
];
