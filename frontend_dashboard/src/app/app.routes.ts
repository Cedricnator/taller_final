import { Routes } from '@angular/router';

export const routes: Routes = [
  // Private Routes
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./dashboard/pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'products',
        title: 'Products',
        loadComponent: () => import('./dashboard/pages/products/products.component').then(c => c.ProductsComponent)
      },
      {
        path: 'product/:id',
        title: 'Product',
        loadComponent: () => import('./dashboard/pages/product/product.component').then(c => c.ProductComponent)
      },
      {
        path: 'user',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component').then(c => c.UserComponent)
      }
    ]
  },
  // Public Routes
  {
    path: 'products',
    loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./products/pages/home/home.component').then(c => c.HomeComponent)
      },
      {
        path: 'products',
        title: 'Products',
        loadComponent: () => import('./products/pages/products/products.component').then(c => c.ProductsComponent)
      },
      {
        path: 'product',
        title: 'Product',
        loadComponent: () => import('./products/pages/product/product.component').then( c => c.ProductComponent)
      },
      {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./products/pages/about/about.component').then( c=> c.AboutComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
