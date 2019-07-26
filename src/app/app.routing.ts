import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: 'material',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path:'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path:'categories',
        loadChildren: './categories/categories.module#CategoriesModule'
      },
      {
        path:'products',
        loadChildren: './products/products.module#ProductsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/mat-icon.module#IconsModule'
      }
    ]
  }
];
