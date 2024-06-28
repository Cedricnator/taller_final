import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: 'dealership',
      title: 'Dealership',
      loadComponent: () => import('./dealership/dealership.component').then( c => c.DealershipComponent ),
      children:  [
         {
            path: 'land',
            title: 'Land',
            loadComponent: () => import('./dealership/pages/landing/landing.component').then( c => c.LandingComponent)
         },
         {
            path: 'products',
            title: 'Products',
            loadComponent: () => import('./dealership/pages/products/products.component').then( c => c.ProductsComponent)
         },
         {
            path: '',
            redirectTo: 'land',
            pathMatch: 'full',
         }
      ]
   },
   {
      path: 'auth',
      title: 'Auth',
      loadComponent: () => import('./auth/auth.component').then( c => c.AuthComponent),
      children: [
         {
            path: 'login',
            title: 'Login',
            loadComponent: () => import('./auth/pages/login/login.component').then( c => c.LoginComponent )
         },
         {
            path: 'register',
            title: 'Register',
            loadComponent: () => import('./auth/pages/register/register.component').then( c => c.RegisterComponent )
         },
         {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
         }
      ]
   },
   {
      path: 'dashboard',
      title: 'Dashboard',
      loadComponent: () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent),
      children: [
         {
            path: 'home',
            title: 'Home',
            loadComponent: () => import('./dashboard/pages/home/home.component').then( c => c.HomeComponent)
         },
         {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
         }
      ]
   }, 
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
   }
];
