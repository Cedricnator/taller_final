import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: 'dashboard',
      title: 'Dashboard',
      loadComponent: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent),
      children: [
         {
            path: 'home',
            title: 'Home',
            loadComponent: () => import('./dashboard/pages/home/home.component').then( c => c.HomeComponent)
         }
      ]
   }
];
