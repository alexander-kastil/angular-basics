import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAComponent } from './admin/admin-a/admin-a.component';
import { AdminBComponent } from './admin/admin-b/admin-b.component';
import { AdminComponent } from './admin/admin.component';
import { authGuard } from './authGuard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),

  },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'admina',
        component: AdminAComponent,
      },
      {
        path: 'adminb',
        component: AdminBComponent,
      },
    ],
    canActivate: [authGuard],
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
