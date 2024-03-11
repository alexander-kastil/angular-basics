import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main.routes').then(m => m.MainRoutingModule)
    },
    {
        path: 'login',
        component: HomeComponent,
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];