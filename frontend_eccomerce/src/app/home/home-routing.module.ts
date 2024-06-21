import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages';
import { HomeLayoutComponent } from './layout';

const routes: Routes = [
  { path: '', 
    component: HomeLayoutComponent, 
    children: [
      { path: '', component: HomeComponent },
      // { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
